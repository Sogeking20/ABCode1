const Services = [
  {
    title: "Backend разработка",
    slug: "backend",
    items: [
      {
        title: "Backend разработка на YII2",
        description:
          "Yii2 – это мощный фреймворк для создания и модификации веб-приложений на PHP. Он упрощает и ускоряет процесс разработки, обеспечивает безопасность и имеет широкий набор инструментов для создания веб-приложений.",
        slug: "backend-yii2",
        img: "https://api.mediaten.ru/storage/company-service/8/kqG4vAjxWiMQDiaY5LkZyPoLVCqVouUoWp4gv1e1.svg",
      },
      {
        title: "Backend разработка на LARAVEL",
        description:
          "Laravel – современный веб-фреймворк на языке PHP, который входит в тройку самых популярных по мнению разработчиков. Он имеет богатый функционал и архитектуру MVC (модель-представление-контроллер), которая отделяет визуализацию от бизнес-логики и данных.",
        slug: "backend-laravel",
        img: "https://api.mediaten.ru/storage/company-service/5/Kq2h9c7SgXO2TQEdlErm8iPjRoyrsU51D8PHg4XP.png",
      },
      {
        title: "Backend разработка на SYMFONY",
        description:
          "Symfony – это модульный фреймворк для создания сайтов и приложений на языке PHP. С ним можно оперативно разрабатывать сложные веб-продукты и элементы, которые будут масштабируемыми, надежными и с хорошей производительностью.",
        slug: "backend-symfony",
        img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAADgCAMAAAAt85rTAAAAkFBMVEUAAAD////+/v729vb7+/v5+fnn5+fw8PD09PTl5eXr6+vu7u7g4ODBwcHU1NSsrKxqamqZmZkJCQk3Nze5ubmenp6Hh4eysrJUVFQjIyPb29tKSkpDQ0PW1tYXFxfKyspiYmIrKyuLi4t+fn4bGxtZWVl1dXU5OTkmJiYwMDBxcXGjo6NgYGFOT09XV1cRERFV8oH2AAATUUlEQVR4nO2diXqquhaADYMIMogiWBxQqFq1Pb7/212mQEjCFAiee7+7ztlt93ZofpOsKSvJDPyPy+zTDeAt/wf8b5epAAVJlsVCZFmSJvrFEwBKoqabjre13chNJXJD23ICXVtMQMkVcOEHztaObufd/v74+nqvoZy+HpvD3+8zCree4S95toEfoOxE+/vlNGuR09fm8LQW3JrBAVBYaL73vLSRVeX7bB3nCochOzqgYmxXP/3gCsidbWhjt2dcQDHYrr7Y6DJ5n21j3Ck5IqBoPv96DkyafB1WxohTcixASbM2w+EKSNuXR2rYOIC6E46Il8g78nxhjKaNAaiEf+PSZXJw9REaNxxw4XHBSxHt4Up1IKAwv/Giy+SsDxyogwAl3Tvz5ZvNri9zkPkfAihZ+zVvvlge9hCrMQDQXL0nwEvkanwA0LhORJfKwZsYUDGmxEvEYlSobIDGqjUMGlvWV49JnzIB2oMcalY5PVkI+wOKx90n8BJ5eP31aW9Azf0UXiLP3t5bX0B/9Um+2WwX8AXUufmdXeVucgQUrREC2qGythVegFL0abhMVn2SGj0A1Y+qF1RWPg9Af1LfrFn23VVNZ0CDMRfISayRARfBR5yXBnl19E27AQrbfxvfbOaKIwJ6/z6+2WnbyTXtBHj+NAxd9l1yGR0AJevTJHVidxil7YDKZ4KjLnJy5yMAGt+f5miQ9kxGK6AxVWaJTbZDAc1/c/8l0pZwawHUPxa9d5W28KkZUOGcmB9D/pqD/EbAxWf53pfH5n7fPC7NamDXSNgIaE9EQpOzu7WCo66q+jHw7KgplDk0uaVNgObkyU8of7ajVdwUSX0961sTsgEG9wmRELmE6jKhE3JfUxCSn4SFXzugvh0WQP8zCvT+yqiSP/JisRClDDH5h/mqZjXrUR8A1wIqz2nBMjmEvpB1magbVnh7PiPbUDLC+B+VsMYs72p9tlrAyVdXEvlzsv6Kv1i/BYsHAWPCurzXqy+gOHLVRBd5h1rcfcnoFLwz0lWXdMRmw1T8pb/2uy4PVQMo17wPT9mk9iwBXGLqJO3UfOjqNa++19iKGkBrchf7HR2FFC/mO1cfWiX/CAepWOd8hPTwlw6oTp+hj4NXIesown8yEUChNrzZHHsAbrnz4BLJAHZRiD30V2jRbIzWma8bNb6nAk7Ol1jqvP0Cbs7vJsoXP6E2wX7rCihMnaN4b8Vijh1x9e1KVUCA93AptOVRGuDkSSYrGVyZY6b8gz22fqU2AkAt2tCDs5CSSKQAqge+OIT8glKFvPAHT16lA2MdVO9iXSgeGwk4eRD41DI7nvyvER9uCgiQEWo2uCBX0mMjAadehdipSPM9wgYkQ7TSg0Qfo0KuyRCA4sRR7sZDbJxGGX5VJQOUc9O7kfkLAtCZ2Al1RKT9ZAfiZgIcm9+OiH0JwIlX4c+5hkz/KFQPeKUhzvZy3/KGuMOGAwYcIBrkF5mAAvDpT7olVQe5hmnjI+ImHHBaFXoxAKogvZqn3fJ9BprTnmW4yo2AzrQqNEQVCJjXNv9n/+uG0e+hQ5p9vW0CXE5bx3RQK/qj0QB0lr3eADixDTQy7ZLSxf+P9Ok69YDStDYwqnrRykguYjVsqgAupo1zj6DoweSHYKRClR+tFnBaGxHHuFmIkCViRpqCM8zYo4DS8FTvz/66et5uq/Pu3qbxDmaWIRQyTxuIo1XCfS1rAId24CmyAn+uLURR0fSj8Xo27aqInegsxQSN4HG8lQKrBrA+VO4id9sUKwGntAjser2x0UE29RJJvjmDfntFnnTAIVpsE6l5U7NBJ8ClE9H+o/djmDugcJSON0JhhpUANNn97NURgGrYVvpfS/tBe4mOhXnKiBocXW1CALesG5H2jgZTJgI6SPNuFI+UsR8Wa0b5tzlVKb3ZPI9IpAAyu2lJkIl2GZB9x3JMDY7ZZEs9Pjg2c6zDgUl5510w13yWoXs4UgANtg/r7Wq5Lcs6bOk88zd6rAxdkTI9omKfXp5nzztcoFrBXV4hwrJQ+RIIQJmxYDkPCEAeuOpn9MH3NdnDmTwsbtFO/A7gGIaDGRDJipUKm6b3136rBQGosFn5czWv7hMx+cpZpISSh9i5q4qrJIBDxKOsGPT9q60ucwJQZSppOuilbqnR9e/UJYs7yyzngJ0viCG+KP4yG2Z74//oqYxG8QlAJjdm7VT6r6bw8uTI6TQzYD5rrxEdSPz6Sh/3d1MtApDFjTllezSE3OGq/5BcNe3h+Tn7qw2NiADdArIkR0I8OYb19CsB2JrNocih2hOgXqP/qukwPWYzzSc6UCZsFJpNBEFvE30iAPu+QyJ2ZYAKoMHQ5LFDuiv9THg9lPWQAAU0+vsgcwyQZmdbRckMWaFmmp578jLTt8s6EH1Z/NEEhJu4kosByjJEZy4GyOIvuCBXn7k1kxuffckmrO6eNagf84Ru/N0j6rS+LQkA6MoxxMI7qQIoMkzB97FQL3lPtLzATVss6lKhXgr1REkGHYqZWl940CAwosgBdYZoc78EMDLK7WDbK+wsKStADw3aQSDQdLgD4ADWGeKcH6MC6DCYeVeu6tAOeb9f3MfOX0pd1NwWHcgUqL4qgC+GUGkrYa3tEJQ/oQMG16Oz/lRp5aAejLfYslF2BZAlIWoRHbFsL+C7E15o8kKf0kf7fA6y+NqJ5OnRHJAllMAXzxOD3D7SVwpJSHvd1cweIiKtrpKvhWaACsubOKAca/lw61ACdiuVDIClFQLmw64frgEf9Fj3NbwDBHDOsrvTo3QFUaZEiEV5lYzOkPVjZ5swyJQHlLR4CGD7uiK9qdAlyXuwC6GfewZCaSaAZL7sMIrFTc46NFXYwZIRDdiXYksFoORRE18t8oJuSOnQJIqmJXbLLWG5KJ3zpodzylJhIROpq+/tJq5cAMo2yztFIs2oAbVRlV7p2cViVsKfJc0fhgfTFimgGLFkDP+WVECwbPJrt0QgAUqVA0VUnYaceOf2KQXggkkTf/swnZa1FKa0waIhvROA8hUFo2/qmpIeHbvQ/MDbRtcxdmwclgUgUQHXTfDeKFD9Ws8WSVaULwb7y/1w+Etkf9+0H0naUbJ1whRwybaw80WdhEmLzbo3tHH3Lh0D7BBN8i4BNRYlOkvX2As1CC1FpvlrqjXWRmHf4bAGbXEku8xLQMbag1utSpToqnRjUl5RW0g/VPQSkLHGfnMExUqZUITp6V/nVC34WwTzQpFPE2rrf4bKsQCcs77FWaUpxfSLSivqi4qNSAVg/IXXKSfmcMA0ZML0Yu7RSLQQ06bo0NHqYwgJRgA80EP0pNlz0mdDypMRV01mcYS7iDECYLocjjQZ1Y9kpuxiwjQVzKclPxF19mPJKICzm0CxbNlXIk2wl2lKlNsujXEAfwxCyxSDFH/usxyhcOEh/oHbSVEMgDvXtt1z1cs/eFIx8Kp/iDW/AMkUFs/jV+HYH9BTZEmSFbX6mZ/8YhbCLGk+C/HBh+1hyb76vHRMb0BkZb+aKHmoFbNWKh2/aikeldgYfh1QvdIife2gV8bgclV/7Gi5wPiZWC6LGuyyrBx1lBJQ6xI7n9FdJVjTn3NQlMWAItMGsEUTG8D4tvjWUKg9XPwSsMMoeVtFligRbDE3qbzBu4ZIdRs0I8GxCLeMJpYd8gNZAqAAlLCHfxcwbEIXVarDDxYG5FFS5qJzPA+kBOxSQnIDJWDSQjyEPKsFfgnooIB5aUfFD41jY25Vxpcy4O2SkwmxRD2RKg7JYL0K+A+StC/zovwOvLyXOZkuWbUQoF0okJVJF3KKVeegS3XUbtyU6K7MqnXJi4aF/581jPSQ02gW1ZFCdc3hVSyXCcUgpr3PWPIs86JdMtsRYiSS1lE+EqdodZ6cWaAuz5dRUUP5N1xZjShZTWW+NtGuRn+rbhbNN4iwIQh0NNezP9JGKK98zKyyNtHlbKqDDqAnI9SY57/CiOQ9WKn+OGuFDi7NBM8zQbJqrgywYeNvITbMFSWA5F7bWA54D1bcaJeSEm0qjhoq3+j6YJfTe1dZ4Wv6+YtbWvoZ8zWxfKdN9WPOo8DQ5OAjgF3W6L/L4qqaXTi4qawMY2y7eD7aGdffu8htgQJ2KWQIy/Qn/elVQwgWlRWPS0DrQY77FXPDnQN2Kti2YAxAn7KhXC7bxv9r58qjxdlgsAPToc5vCq6tCqDfxd5+w8IOagSAH6qB7aheUVZq2GoDuslXtdKpW63aeZ5b6oB0DNYvCQnU42mKvaNd1HxlX9PhbjKu+nSQu18B7Lg5+ZZV+AKJPJR6K8IZmg5QFX9CUCw9IaZwxP1KuOyFKmDHku0/mJfRr2gUcNoVB8JkM4zMJC0oI5TnjlMYHPSt+P1xstgdSKYNteT3M7noAuVziAXQAyV7ChSOh6/jFb9EDrNOTjbc2iXpXhjtrpGd73KH2VwALNJM3tA4WMiXPnWOe6IBDti56n69iTSQzyFJVBR4Nh+MgyTjl+LmvGhWkF++KTmjBgPs4/X+eXMRQMjK4ASyblNDdNzMp13N8fA2mwBUe73+cjNUAYdLrmNya0adTpmCHEOl2ZEA7JJZQ+XyGzq+gtTwSHNzW3t360aDc69M7o+37ZqUb5UAlPpvffne7K+r0H5Z1st2V/8cGtJHq0U1nZb+7czc/lah7D5jKtvuLJT6GKByPKC1PHSlBIQbi7iIg/PFI5XjJ3owKYA8jyzeE7uV4nCY4xU51D28PI8iucnQBy87kKOj/UZOCkAAZX6H+r4KNya3nOPum8flMKcC8ksAfSP169DKaxxP/zoDOiC3w0juOrK0nTNyjJRqz7IQeam1vYzk/fOAl+ctXHoNILdP9VYU/eR5q9oTxkYRF9QBjnXoEC5koTbPa9ROei0grwjbh0UxRQUQueNzPGk40wkEXA5n/iE0zMCja5ql4VQuoHGpOiKS9lzvaWw8V431xI5GWeN+Gl5mM+5vww43xACF8/i/kjj3gKeXRtyugR/eyLTdvFlCGa66QRvI8yZD/IzYCc4XxUMlrk4MwUP8w2vsixTxrQRMO747S9QK2Li1ikXO2BTkeg77F3ELE3lK88h3nb1fVStI3ZA8mryIKwso52yP24V7rXRjkh+43lX1S146QTkpvUNNCSqPaxSGYbSrsaBhWZuROmk8T/i8OEIXwH5n3UfBPMlHiKpD906qVr5nfrmnhBQYGqDY/S1/XmkZZfIqQaUNvuzgGqEIlbhexqxSYGiAnQ3V+omcGQeoQWxlVznny+JsGgsVsGtG77oASIxO1GjHsp/DFevMxPO8SuZKvdaGCtjR2//GdwMSa/ffXuXhI7cdBLHc6bdn0QG7GWOrKAkphiDWhWcFHcIi12PmXTpJDWDznQCZHLS8PBLJt1QD2eSCCwEW41NO3hpTDjW3ENYAAr19tmQHBQDUzmE9H4JyyQxIFtfb/uruAq0D7LB498IGaEJR2RX5RrxQIG85BoENVxDWArafJ0isGOGONJJMA8DjVpudyKb/7XXg2LZUQQNE5uA6LEtjgMRxNTfhq7+sth6wfrd/LSDQkG5/lrsIgMj3LrUvphskWx0aC068cg5aZaj1QMpLZc7XaT8brjVvAmyxhnmupcjoAvmG8OmlgyMwHXbSXfbLBoZGQLHRcv1TPRxWOCLuz8MvthECnWeOKeFTmhgaAYHeRLh24D6ItDALufT1/QyKHSALgzPfrv6C03bAmhMbcnkgFYSV8wdfi7L/Is53dFwG3YXdomi2ZVkPssFrb0gA7nbVucZ/eRsGAVY3kGFyCVL1lSGmlnz9dQ0A3J0LlhZf7TKriQF7AUrbBhP28CTYiUDxwtC2ktLKrPMk3eB+Acnapd4a2QsQLOyGbvgKkemWSf4XxeIZ/OXybDIQXQGB3LiYt8qLv+FZFhmo9vqb4Kbwc60H2gswjvIap9LDPiJVh8JCN6JpLlA7NzS5H6BsN7uSP6uXYZq+fzQD47Wa6vq7VYf+6wgIxFZncn3ZHPaHzdgrNw3i1lydzAQIZA7rhsMkpF3Zyg4YB6w8F716y6XV/vUGBPoH7v+uk32Lf8YECEx+1Yg95V4fwA8BBCLnuKCrbFShvbEsgEC5TX2JNEVOXcw7IyAQjI+rmh+r1f0cAAjApwm/vJ4N7gsI5jzLzFol0ntMPzZAwPGAlDZ5vPriMQEC3Z34tuVMLrfu1m8YIADBBzrx7jRkP8cGBCqvIzNr5XnsPzwHAALg806XoXJaNecGeQACyZvMdTts+9m+cQCBpE50bW/oy+2t4QAYIwYTXC198Ni7byhgLGLIdeH2J+oWt/MDjO2+yw3x59YjLuIGCGTzxSWO2ttBx7QEZ8A4yFg6bKflN8jB0pgMOy6jACZihn+jZUN/DhGlMJJNRgOM9Y0ZXsdYbNlFQeOSZj8ZETCpqPSigRrna2XpA6weKaMCxiJqR2vFWlKx35raYqyxmcvYgJkc3f2jV237+7IfwSTQhA8gAAvT2bqHTpDv+832xpx2FeEFmIjkB5Z9u95rR+x7888zfBnHQb5Yi/AEjEWQRGWp6abhWK/QjVapRK67tTwj8DVNWUgjzzlcOAN+Xv4P+N8u//OA/wHKBB65WBs3tgAAAABJRU5ErkJggg==",
      },
      {
        title: "Backend разработка на NODE JS",
        description:
          "Node.js — это платформа для выполнения JavaScript на сервере. Она основана на движке V8 и поддерживает неблокирующие операции, что делает её идеальной для разработки высокопроизводительных веб-приложений.",
        slug: "backend-nodejs",
        img: "data:image/png;base64,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",
      },
      {
        title: "Backend разработка на PYTHON",
        description:
          "Python — это высокоуровневый язык программирования общего назначения. Он создан с акцентом на читаемость кода, которая ускоряет процесс разработки. Широко используется в создании серверной части ПО, аналитике данных, тестировании и машинном обучении.",
        slug: "backend-python",
        img: "	https://api.mediaten.ru/storage/company-service/21/SeQ6Ej0WqvZMFf1PEo13R1mGreCUCt5yfZK4lyR3.png",
      },
    ],
  },
  {
    title: "Frontend разработка",
    slug: "frontend",
    items: [
      {
        title: "Frontend разработка на REACT JS",
        description:
          "React.js — это популярная библиотека для построения пользовательских интерфейсов на JavaScript. Она позволяет разработчикам создавать многократно используемые компоненты, управлять состоянием приложения и эффективно обновлять интерфейс, что делает разработку интерактивных веб-приложений более быстрой и удобной.",
        slug: "frontend-react",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
      },
      {
        title: "Frontend разработка на VUE JS",
        description:
          "Vue.js — это прогрессивный фреймворк для создания пользовательских интерфейсов. Он предлагает реактивную привязку данных и компонентный подход, что упрощает разработку сложных приложений. Vue гибок и легко интегрируется с другими проектами, что делает его популярным выбором среди разработчиков.",
        slug: "frontend-vue",
        img: "	https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png",
      },
      {
        title: "Frontend разработка на NEXT JS",
        description:
          "Next.js — это фреймворк для React, позволяющий создавать серверные рендеринговые и статически сгенерированные приложения. Он предлагает автоматическую маршрутизацию, создание API, оптимизацию изображений и другие функции для повышения производительности и удобства разработки.",
        slug: "frontend-next",
        img: "	https://www.drupal.org/files/project-images/nextjs-icon-dark-background.png",
      },
      {
        title: "Frontend разработка на ANGULAR JS",
        description:
          "AngularJS — это фреймворк JavaScript для создания динамичных веб-приложений. Он использует MVC-структуру, обеспечивая двустороннюю привязку данных, директивы и модульность. AngularJS упрощает разработку, тестирование и поддержку крупных приложений за счет масштабируемой архитектуры.",
        slug: "frontend-angular",
        img: "	https://blog.skillfactory.ru/wp-content/uploads/2023/02/2048px-angular_full_color_logo.svg-6022679.png",
      },
    ],
  },
  {
    title: "FullStack разработка",
    slug: "fullstack",
    items: [
      {
        title: "Fullstack разработка",
        description:
          "Fullstack разработка включает Frontend и Backend. Разработчики используют JavaScript, React.js, Vue.js, Angular.js, Ntxt.js для интерфейса и серверные языки, такие как Node.js, PHP или Python, для обработки данных. Они также работают с базами данных и облачными технологиями, обеспечивая полное приложение.",
        slug: "fullstack",
        img: "https://images.ctfassets.net/zsyyd4yzh6xx/1hI7mvCbat7cGfUBR5I8I2/32ce801efae36d7036bcfaa6200bd182/bracket-icons-code.svg?f=center&fit=thumb&h=360&w=640",
      },
    ],
  },
  {
    title: "Mobile разработка",
    slug: "mobile",
    items: [
      {
        title: "Mobile разработка на FLUTTER",
        description:
          "Flutter — это фреймворк от Google для создания кроссплатформенных мобильных приложений. Он использует язык программирования Dart и позволяет разработчикам создавать приложения для iOS и Android с единой кодовой базой. Flutter обеспечивает высокую производительность, богатый UI и быстрое развитие благодаря Hot Reload.",
        slug: "mobile-flutter",
        img: "https://avatars.githubusercontent.com/u/14101776?s=280&v=4",
      },
      {
        title: "Mobile разработка на SWIFT",
        description:
          "Swift — это язык программирования от Apple, созданный для разработки приложений под iOS, macOS и другие платформы. Он обладает современным синтаксисом, безопасностью типов и высокой производительностью, что делает его идеальным выбором для разработчиков.",
        slug: "mobile-swift",
        img: "https://blog.skillfactory.ru/wp-content/uploads/2023/02/58482ce4cef1014c0b5e4a4c-5532298.png",
      },
      {
        title: "Mobile разработка на REACT NATIVE",
        description:
          "React Native — это фреймворк от Facebook для создания мобильных приложений с использованием JavaScript и React. Он позволяет разрабатывать кросс-платформенные приложения, которые выглядят и ведут себя как нативные, обеспечивая высокую производительность и удобство в разработке.",
        slug: "mobile-swift",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
      },
      {
        title: "Mobile разработка на KOTLIN",
        description:
          "Kotlin — современный язык программирования от JetBrains, совместимый с Java. Он известен своей лаконичностью, безопасностью типов и возможностями функционального программирования. Kotlin используется для разработки мобильных и серверных приложений, что делает его популярным выбором среди разработчиков.",
        slug: "mobile-kotlin",
        img: "https://kiparo.ru/file_uploads/blog_images/kotlin_image.png",
      },
    ],
  },
  {
    title: "Тестирование",
    slug: "testing",
    items: [
      {
        title: "Функциональное тестирование",
        description:
          "Функциональное тестирование – это многоуровневая проверка работы веб-продукта. Она помогает обеспечить соответствие требований к функционалу, повысить качество продукта, улучшить пользовательский опыт и гарантировать надежность системы.",
        slug: "functional-testing",
        img: "	https://api.mediaten.ru/storage/company-service/12/Ofe0l9jpP2yP4lhntTax8nkrI7vBHI3h2ilrQIJf.png",
      },
      {
        title: "Ручное тестирование",
        description:
          "Ручное тестирование – это мануальный метод проверки программного обеспечения на наличие дефектов и удобство интерфейса для пользователя. Выполнение тестовых сценариев происходит вручную и может быть быстро внедрено уже на ранних этапах разработки.",
        slug: "manual-testing",
        img: "https://api.mediaten.ru/storage/company-service/11/MjhIyYPPreVvDNZLYdKRNG4p6YqRjn1ppzAsEi5H.png",
      },
    ],
  },
  {
    title: "Менеджмент",
    slug: "management",
    items: [
      {
        title: "Project менеджер",
        description:
          "Project менеджер – это руководитель проекта, который следит за ходом работы и выступает посредником между клиентом и исполнителями. Он берет на себя ответственность за планирование, организацию, управление и контроль выполнения всех поставленных задач.",
        slug: "management",
        img: "	https://cdn-icons-png.freepik.com/256/1305/1305145.png?semt=ais_hybrid",
      },
    ],
  },
  {
    title: "Enterprise-решения",
    slug: "enterprise",
    items: [
      {
        title: "РАЗРАБОТКА CRM-СИСТЕМ",
        description:
          "CRM (Customer Relationship Management) – это система управления, которая способствует росту уровня обслуживания клиентов, увеличению дохода и конкурентному преимуществу. Она фиксирует данные и составляет отчеты о продажах, клиентах, сотрудниках и маркетинге.",
        slug: "crm-system",
        img: "https://cdn-icons-png.flaticon.com/512/87/87578.png",
      },
      {
        title: "РАЗРАБОТКА И ВНЕДРЕНИЕ ERP-СИСТЕМ",
        description:
          "ERP (система планирования ресурсов предприятия) – это комплексное программное обеспечение, которое интегрирует и автоматизирует бизнес-процессы организации. Оно охватывает такие области, как учет, финансы, логистика, производство и управление персоналом.",
        slug: "erp-system",
        img: "https://cdn-icons-png.flaticon.com/512/2285/2285567.png",
      },
      {
        title: "РАЗРАБОТКА ЛИЧНЫХ КАБИНЕТОВ",
        description:
          "Личные кабинеты B2B (Business-to-Business) и B2C (Business-to-Consumer) – веб-интерфейсы, содержащие индивидуальные учетные записи и истории сделок. Они выполняют часть работы менеджеров, позволяя предприятиям и клиентам удобно взаимодействовать с компанией.",
        slug: "personal-account",
        img: "https://ufa.estima.ru/local/templates/estima-im/images/icons/icon-user.png",
      },
      {
        title: "РАЗРАБОТКА ЧАТ БОТОВ",
        description:
          "Чат-бот (chatbot) – это программный агент, который автоматизирует и облегчает общение компании с пользователями через чаты мессенджера, веб-сайта и приложения. Чем «умнее» бот, тем больше функционала он может на себя взять и успешнее справляться со своими задачами.",
        slug: "chat-bot",
        img: "https://cdn-icons-png.flaticon.com/512/4711/4711987.png",
      },
    ],
  },
  //   {
  //     title: "E-COMMERCE РЕШЕНИЯ",
  //     slug: "e-commerce",
  //     items: [
  //       {
  //         title: "РАЗРАБОТКА АГРЕГАТОРОВ",
  //         description:
  //           "Агрегатор – это сервис, который является посредником между компаниями и клиентами. Представляет собой каталог товаров и услуг от нескольких поставщиков. Дает организациям дополнительную площадку продаж, а покупателям – сравнение продукции и выгодный выбор.",
  //         slug: "crm-system",
  //         img: "https://cdn-icons-png.flaticon.com/512/87/87578.png",
  //       },
  //       {
  //         title: "РАЗРАБОТКА И ВНЕДРЕНИЕ ERP-СИСТЕМ",
  //         description:
  //           "ERP (система планирования ресурсов предприятия) – это комплексное программное обеспечение, которое интегрирует и автоматизирует бизнес-процессы организации. Оно охватывает такие области, как учет, финансы, логистика, производство и управление персоналом.",
  //         slug: "erp-system",
  //         img: "https://cdn-icons-png.flaticon.com/512/2285/2285567.png",
  //       },
  //       {
  //         title: "РАЗРАБОТКА ЛИЧНЫХ КАБИНЕТОВ",
  //         description:
  //           "Личные кабинеты B2B (Business-to-Business) и B2C (Business-to-Consumer) – веб-интерфейсы, содержащие индивидуальные учетные записи и истории сделок. Они выполняют часть работы менеджеров, позволяя предприятиям и клиентам удобно взаимодействовать с компанией.",
  //         slug: "personal-account",
  //         img: "https://ufa.estima.ru/local/templates/estima-im/images/icons/icon-user.png",
  //       },
  //       {
  //         title: "РАЗРАБОТКА ЧАТ БОТОВ",
  //         description:
  //           "Чат-бот (chatbot) – это программный агент, который автоматизирует и облегчает общение компании с пользователями через чаты мессенджера, веб-сайта и приложения. Чем «умнее» бот, тем больше функционала он может на себя взять и успешнее справляться со своими задачами.",
  //         slug: "chat-bot",
  //         img: "https://cdn-icons-png.flaticon.com/512/4711/4711987.png",
  //       },
  //     ],
  //   },
];

export default Services;
