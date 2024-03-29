## Setting up Docker and Docker Compose on Linux
- `sudo apt-get update`
- `sudo apt-get install -y apt-transport-https ca-certificates curl gnupg lsb-release`
- `curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -`
- `sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable"`
- `sudo apt-get install -y docker-ce docker-ce-cli containerd.io`
- `sudo usermod -aG docker ubuntu`
- `sudo curl -L "https://github.com/docker/compose/releases/download/2.2.3/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose`
- `sudo chown root:docker /usr/local/bin/docker-compose`
- `sudo chmod +x /usr/local/bin/docker-compose`
- If all of these commands ran successfully start a new shell session and run `docker run hello-world`.  You should see output from that docker container confirming you have Docker configured correctly.
