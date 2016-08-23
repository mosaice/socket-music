<template lang='jade'>
  footer
    div.container
      div.row
        div.col-sm-5
          h3.lead!= <strong>Information</strong> and <strong>Copyright</strong>
          p!= Powered by <strong>Node.js</strong>, <strong>MongoDB</strong> and <strong>React</strong> with Flux architecture and server-side rendering.
          p!= You may view the <a href='https://github.com/sahat/newedenfaces-react'>Source Code</a> behind this project on GitHub.
          p © 2015 Sahat Yalkabov.
        div.col-sm-7.hidden-xs
          h3.lead!= <strong>Leaderboard</strong> Top 5 Characters
          ul.list-inine
            li
              a
                img.thumb-md(src=`http://image.eveonline.com/Character/_128.jpg`)
</template>

<script>
export default {
  data() {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
