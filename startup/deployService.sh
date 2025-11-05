#!/bin/bash

while getopts k:h:s: flag
do
    case "${flag}" in
        k) key=${OPTARG};;
        h) hostname=${OPTARG};;
        s) service=${OPTARG};;
    esac
done

if [[ -z "$key" || -z "$hostname" || -z "$service" ]]; then
    echo -e "\nMissing required parameter."
    echo "  syntax: deployService.sh -k <pem key file> -h <hostname> -s <service>"
    exit 1
fi

echo -e "\n----> Deploying React bundle $service to $hostname with $key"

# Step 1: Build React frontend
echo -e "\n----> Build the distribution package"
npm install
npm run build  # creates dist/
rm -rf build
mkdir -p build
cp -r dist build/dist       # Frontend files
mkdir -p build/service      # Backend directory
cp service/*.js build/service/      # backend JS
cp service/*.json build/service/    # backend JSON

# Step 2: Prepare target server
echo -e "\n----> Clearing out previous distribution on the target"
ssh -i "$key" ubuntu@$hostname << ENDSSH
rm -rf services/${service}
mkdir -p services/${service}
ENDSSH

# Step 3: Copy build to server
echo -e "\n----> Copy the distribution package to the target"
scp -r -i "$key" build/* ubuntu@$hostname:services/$service

# Step 4: Install dependencies and restart service
echo -e "\n----> Deploy the service on the target"
ssh -i "$key" ubuntu@$hostname << ENDSSH
export PATH=\$PATH:/home/ubuntu/.nvm/versions/node/v22.12.0/bin
cd services/${service}/service
npm install
pm2 restart ${service} || pm2 start index.js --name ${service}
ENDSSH

# Step 5: Cleanup local build
echo -e "\n----> Removing local copy of the distribution package"
rm -rf build