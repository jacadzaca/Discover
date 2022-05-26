## Requirements

* You must serve valid JSON from `/.well-known/discover`

**Links**
* All links must be absolute links
* Avoid leaving slashes `/` at the end

## Fields

### version
*float*

Current version is `0.1`
Clients may check for a version

---
### client
*url string*

On the Web it may be handy to link the website's own client.

---
### name
*string*

Any name you choose, this will appear in previews from other sites/clients.

---
### image
*url string*

The image you wish to appear for previews.

---
### location
*url string*

The url for your website

---
### resources
*resource object*

This is intended to feature content on your website.

Fields:
* **label**: *string* The label for the resource
* **location** *url string* The location of the resource
* **description** *string* the description of the resource

---
### connections
*list of urls*

When you connect to someone else their link or preview appears.

---
### connection_groups
*connection groups*

```
{
    "Group1":["https://example.com",..],
    "Group2":...
}
```

An object where each property is the tag or label for the group for the list of connection urls.

Instead of a simple list you may prefer to group your connections by a tag or topic.

---
### contact
*list of contact objects*

A contact object is a simple what/where object.

`{"email":"you@your.website}`

Any contact information you wish to share.

---

If you have any questions don't hesitate to contact [tom](https://tomfasano.net/contact)
