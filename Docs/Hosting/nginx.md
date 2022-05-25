```
#...
location /discover.html {
        gzip off;
        include /etc/nginx/fastcgi_params ;
        fastcgi_pass unix:/var/run/fcgiwrap.socket;
        fastcgi_param SCRIPT_FILENAME /var/www/example/cgi-bin/client; #change this
        fastcgi_param QUERY_STRING $query_string;
}
#...

```
