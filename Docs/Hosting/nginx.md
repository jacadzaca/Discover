```
fastcgi_cache_path /etc/nginx/cache levels=1:2 keys_zone=DISCOVER:150m inactive=60m;
fastcgi_cache_key "$scheme$request_method$host$request_uri";
#server {
#...
location /discover.html {
        gzip off;
        include /etc/nginx/fastcgi_params ;
        fastcgi_pass unix:/var/run/fcgiwrap.socket;
        fastcgi_param SCRIPT_FILENAME /var/www/example/cgi-bin/client; #change this;
        fastcgi_param QUERY_STRING $query_string;
        fastcgi_cache DISCOVER;
        fastcgi_cache_valid 200 60m
}
#...
#}

```
