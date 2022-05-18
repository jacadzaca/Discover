# Discover

A simple solution to site discovery. Build networks by choosing who you endorse.

The data which you present yourself with is owned by you, and can be accessed across any site which actively promotes it.

This means:
* No complicated software to run (beyond an existing website)
* No Cryptocurrency/NFT
* Scalable
* Extensible
* Machine Readable

### Protocol neutrality
Porting over to TOR/Gopher/IPFS/ect should be relatively simple

Follow these steps and you're online!

1) Grab the [example json file](/Client/.well-known/discover)
2) [Check out the docs](Docs/readme.md)
3) Modify it with your data
4) Serve that file from **your.website/.well-known/discover**
5) Enable CORS for your website in [/etc/nginx/sites-enabled/your.website](/Docs/Hosting/nginx.md)
6) Feel free to test your setup by visiting:
https://tomfasano.net/discover?url=your.website

### How do I run the client on my website?

1) Navigate to your webroot
2) Make a subdirectory called discover
3) Copy the contents of the [Client](Client/) folder into `discover`

## Credits
Fork of [Interverse](https://codeberg.org/gabe/Interverse)
