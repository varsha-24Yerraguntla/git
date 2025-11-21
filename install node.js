#!/bin/bash
yum update -y
curl -sL https://rpm.nodesource.com/setup_16.x | bash -
yum install -y nodejs git
echo "Node.js Installed Successfully" > /home/ec2-user/info.txt
