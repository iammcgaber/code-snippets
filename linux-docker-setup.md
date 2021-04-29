## Docker Configuration for Unix
- `sudo apt-get update`
- `sudo apt-get install apt-transport-https ca-certificates curl gnupg lsb-release`
- `curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -`
- `sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable"`
- `sudo apt-get install docker-ce docker-ce-cli containerd.io`
- `sudo usermod -aG docker ubuntu`
- `sudo curl -L "https://github.com/docker/compose/releases/download/1.29.1/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose`
- If all of these commands ran successfully, disconnect from your instance using `ctrl-d` and ssh back into the instance.
- Run `docker run hello-world`.  You should see output from that docker container confirming you have Docker configured correctly.
