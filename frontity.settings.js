const settings = {
  "name": "frontity-test",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            {
              name:"ABOUT",
              href: "/about/",
              submenu: [
                {
                  name: "SUBSCRIBE",
                  href: "/subscribe-to-my-newsletter/"
                },
                {
                  name: "CONTACT",
                  href: "/contact/"
                }
              ]
            },
            {
              name: "BLOG",
              href: "/blog/"
            },
            {
              name: "BEAUTY",
              href: "/beauty/",
              submenu: [
                {
                  name: "HAIR",
                  href: "/hair/"
                },
                {
                  name: "SKIN",
                  href: "/skin/"
                }
              ]
            }
          ],
          "featured": {
            "showOnList": true,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "http://5zq.7eb.myftpupload.com/wp-json"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
