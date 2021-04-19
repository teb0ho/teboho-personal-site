const React = require('react');

// https://victorzhou.com/blog/dark-mode-gatsby/

exports.onRenderBody = ({ setHeadComponents }) => {
    setHeadComponents([
        <script
            dangerouslySetInnerHTML={{
                __html: `(function() {
                    function setTheme(theme) {
                      window.__theme = theme;
                      console.log('Theme updated:', theme);
                
                      if (theme === 'dark') {
                        document.documentElement.className = 'dark';
                      } else {
                        document.documentElement.className = '';
                      }
                  
                    };
                  
                    window.__setPreferredTheme = function(theme) {
                      setTheme(theme);
                      try {
                        localStorage.setItem('preferred-theme', theme);
                      } catch (e) {}
                    };
                  
                    let preferredTheme;
                    try {
                      preferredTheme = localStorage.getItem('preferred-theme');
                    } catch (e) {}
                  
                    let darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

                    darkQuery.addListener(e => {
                        window.__setPreferredTheme(e.matches ? 'dark' : 'light');
                    });
                  
                    setTheme(preferredTheme || (darkQuery.matches ? 'dark' : 'light'));
                  })();`.replace(/\n/g, ' ').replace(/ {2}/g, ''),
            }}
        />
    ]);
};