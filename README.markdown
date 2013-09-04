## demo for AVOSCloud using javascript sdk

## 如何运行起来


* 下载到本地后，在 todo/public 目录下运行web服务器 (即web服务器根目录指向todo/public)，可以用 python -m SimpleHTTPServer，等任何web服务器。


- - -

## <a href="http://todo.avosapps.com" target="_blank">线上demo地址 </a>


- - -

## 变成自己的Demo

* 注册 <a href="https://cn.avoscloud.com/login.html" target="_blank"> AVOSCloud 用户</a>，并登录。
* 进入开发者平台，创建自己的应用。
* 在刚创建应用的 应用设置 下 应用key 选项中 copy自己的应用id，应用key。
* 修改public/js/todos.js 中这行代码AV.initialize(id,key)

	AV.initialize("28ferwlg9sncja6qw9ede6ruomjfed7lex4dljhlg80u23xl",
                   "xj25ocmxj8cahecic82bfy9e79rctmf663jfn8ixh86eisl5");
* 在数据管理页面，创建名为 Todo 的class。
* 刷新页面，大功告成。
                   
