<template><div><h4 id="_1-安装nginx服务器" tabindex="-1"><a class="header-anchor" href="#_1-安装nginx服务器"><span>1.安装<code v-pre>nginx</code>服务器</span></a></h4>
<div class="language-cmd line-numbers-mode" data-highlighter="prismjs" data-ext="cmd" data-title="cmd"><pre v-pre class="language-cmd"><code><span class="line"> # yum install nginx</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="_2-配置nginx的选项" tabindex="-1"><a class="header-anchor" href="#_2-配置nginx的选项"><span>2.配置nginx的选项</span></a></h4>
<p>​	找到 <code v-pre>/etc/nginx/nginx.conf</code>文件 <a href="......%5CDesktop%5Cfsdownload%5Cnginx.conf">nginx.conf</a></p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre class="language-json"><code><span class="line"># For more information on configuration<span class="token punctuation">,</span> see<span class="token operator">:</span></span>
<span class="line">#   * Official English Documentation<span class="token operator">:</span> http<span class="token operator">:</span><span class="token comment">//nginx.org/en/docs/</span></span>
<span class="line">#   * Official Russian Documentation<span class="token operator">:</span> http<span class="token operator">:</span><span class="token comment">//nginx.org/ru/docs/</span></span>
<span class="line"></span>
<span class="line">user nginx;</span>
<span class="line">worker_processes auto;</span>
<span class="line">error_log /var/log/nginx/error.log;</span>
<span class="line">pid /run/nginx.pid;</span>
<span class="line"></span>
<span class="line"># Load dynamic modules. See /usr/share/doc/nginx/README.dynamic.</span>
<span class="line">include /usr/share/nginx/modules<span class="token comment">/*.conf;</span>
<span class="line"></span>
<span class="line">events {</span>
<span class="line">    worker_connections 1024;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">http {</span>
<span class="line">    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '</span>
<span class="line">                      '$status $body_bytes_sent "$http_referer" '</span>
<span class="line">                      '"$http_user_agent" "$http_x_forwarded_for"';</span>
<span class="line"></span>
<span class="line">    access_log  /var/log/nginx/access.log  main;</span>
<span class="line"></span>
<span class="line">    sendfile            on;</span>
<span class="line">    tcp_nopush          on;</span>
<span class="line">    tcp_nodelay         on;</span>
<span class="line">    keepalive_timeout   65;</span>
<span class="line">    types_hash_max_size 4096;</span>
<span class="line"></span>
<span class="line">    include             /etc/nginx/mime.types;</span>
<span class="line">    default_type        application/octet-stream;</span>
<span class="line"></span>
<span class="line">    # Load modular configuration files from the /etc/nginx/conf.d directory.</span>
<span class="line">    # See http://nginx.org/en/docs/ngx_core_module.html#include</span>
<span class="line">    # for more information.</span>
<span class="line">    include /etc/nginx/conf.d/*.conf;</span>
<span class="line"></span>
<span class="line">    server {</span>
<span class="line">        listen       80;</span>
<span class="line">        listen       [::]:80;</span>
<span class="line">        server_name  _;</span>
<span class="line">        root         /usr/share/nginx/html;</span>
<span class="line"></span>
<span class="line">        # Load configuration files for the default server block.</span>
<span class="line">        include /etc/nginx/default.d/*.conf;</span>
<span class="line"></span>
<span class="line">        location / {</span>
<span class="line">        	root  /var/www/skycity/dist;</span>
<span class="line">        	index  index.html index.htm;</span>
<span class="line">        	try_files $uri $uri/ /index.html; # 解决刷新404</span>
<span class="line">        }</span>
<span class="line">        </span>
<span class="line">        location /api {</span>
<span class="line">        	proxy_pass http://gmall-h5-api.atguigu.cn;</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        error_page 404 /404.html;</span>
<span class="line">        location = /404.html {</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        error_page 500 502 503 504 /50x.html;</span>
<span class="line">        location = /50x.html {</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line"># Settings for a TLS enabled server.</span>
<span class="line">#</span>
<span class="line">#    server {</span>
<span class="line">#        listen       443 ssl http2;</span>
<span class="line">#        listen       [::]:443 ssl http2;</span>
<span class="line">#        server_name  _;</span>
<span class="line">#        root         /usr/share/nginx/html;</span>
<span class="line">#</span>
<span class="line">#        ssl_certificate "/etc/pki/nginx/server.crt";</span>
<span class="line">#        ssl_certificate_key "/etc/pki/nginx/private/server.key";</span>
<span class="line">#        ssl_session_cache shared:SSL:1m;</span>
<span class="line">#        ssl_session_timeout  10m;</span>
<span class="line">#        ssl_ciphers HIGH:!aNULL:!MD5;</span>
<span class="line">#        ssl_prefer_server_ciphers on;</span>
<span class="line">#</span>
<span class="line">#        # Load configuration files for the default server block.</span>
<span class="line">#        include /etc/nginx/default.d/*.conf;</span>
<span class="line">#</span>
<span class="line">#        error_page 404 /404.html;</span>
<span class="line">#            location = /40x.html {</span>
<span class="line">#        }</span>
<span class="line">#</span>
<span class="line">#        error_page 500 502 503 504 /50x.html;</span>
<span class="line">#            location = /50x.html {</span>
<span class="line">#        }</span>
<span class="line">#    }</span>
<span class="line"></span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">#配置nginx服务</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">location / {</span>
<span class="line">        	root   /var/www/app/skycity/dist;</span>
<span class="line">        	index index.html;</span>
<span class="line">        	try_files $uri $uri/ /index.html;</span>
<span class="line">        }</span>
<span class="line">        </span>
<span class="line">        location /api {</span>
<span class="line">        	proxy_pass http://gmall-h5-api.atguigu.cn;</span>
<span class="line">        }</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>
<h4 id="启动nginx服务器" tabindex="-1"><a class="header-anchor" href="#启动nginx服务器"><span>启动<code v-pre>nginx</code>服务器：</span></a></h4>
</li>
</ol>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">service nginx start</span>
<span class="line">// 出现：Redirecting to /bin/systemctl start nginx.service 表示启动成功</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li>
<h4 id="关闭nginx服务器" tabindex="-1"><a class="header-anchor" href="#关闭nginx服务器"><span>关闭<code v-pre>nginx</code>服务器</span></a></h4>
<p>①：通过系统服务管理器（Systemd）:</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">systemctl stop nginx</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>②：如果Nginx没有设置为系统服务，可以直接使用<code v-pre>nginx</code>命令:</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">nginx -s stop</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>③：如果上述方法都不适用，可以发送信号直接杀死nginx进程（慎用，可能导致数据丢失）:</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">kill -quit xxxx</span>
<span class="line">xxxx是进程的编码</span>
<span class="line">pkill -9 nginx</span>
<span class="line">强制杀死 会导致数据丢失</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-重启nginx服务器" tabindex="-1"><a class="header-anchor" href="#_5-重启nginx服务器"><span>5：重启nginx服务器</span></a></h4>
<p>查看当前进程号：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">ps -ef|grep nginx</span>
<span class="line">root     20208  3365  0 23:35 pts/0    00:00:00 grep --color=auto nginx</span>
<span class="line">root     32439     1  0 22:53 ?        00:00:00 nginx: master process /usr/sbin/nginx</span>
<span class="line">nginx    32440 32439  0 22:53 ?        00:00:00 nginx: worker process</span>
<span class="line">nginx    32441 32439  0 22:53 ?        00:00:00 nginx: worker process</span>
<span class="line">324是进程号</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">kill -HUP 20208||进程号</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
</ol>
</div></template>


