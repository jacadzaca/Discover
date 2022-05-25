# Discover

A simple solution to site discovery. Build networks by choosing who you endorse. Everyone owns their data.

Simple means:
* No Javascript
* No Cryptocurrency/NFT
* Scalable
* Extensible
* Machine Readable

Follow these steps to enter the network:

1) Grab the [example json file](https://codeberg.org/onasaft/Discover/src/branch/master/.well-known/discover)
2) [Check out the docs](https://codeberg.org/onasaft/Discover/src/branch/master/Docs/README.md)
3) Modify it with your data
4) Serve that file from **your.website/.well-known/discover**
5) Feel free to test your setup by visiting:
https://tomfasano.net/discover.html?url=your.website

### How do I run the client on my website?

1) Install dependencies: `apt install -yy fcgiwrap jq curl`
1) Clone this repo
1) Navigate to your webroot
3) Make a subdirectory for the client script, `mkdir cgi-bin`. (The name doesn't matter)
4) Copy the [client](src/client) script into this folder
5) Copy the [css](src/discover.css) file into your webroot.
6) Add the [nginx config](https://codeberg.org/onasaft/Discover/src/branch/master/Docs/Hosting/nginx.md) snippet to your website's config in `/etc/nginx/sites-enabled/your.website`

Now go to `your.website/discover.html`
You should see your json file displayed as a webpage, as well as previews of other people's sites you chose to connect with.

## Credits
Fork of [Interverse](https://codeberg.org/gabe/Interverse)
