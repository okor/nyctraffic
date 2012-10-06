use Rack::Static, :urls => ["/css", "/img", "/js", "/fonts"], :root => "public"
run lambda { |env| [200, { 'Content-Type' => 'text/html', 'Cache-Control' => 'public, max-age=31556926' }, File.open('public/cams.html', File::RDONLY)] }

