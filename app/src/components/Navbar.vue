<template lang='jade'>
nav(classname='navbar navbar-default navbar-static-top')
  div(classname='navbar-header')
    button(type='button', classname='navbar-toggle collapsed', data-toggle='collapse', data-target='#navbar')
      span(classname='sr-only') Toggle navigation
      span(classname='icon-bar')
      span(classname='icon-bar')
      span(classname='icon-bar')
    a(to='/', classname='navbar-brand')
    span(ref='triangles', classname="{'triangles", animated='', +='', this.state.ajaxanimationclass}='')
      div(classname='tri invert')
      div(classname='tri invert')
      div(classname='tri')
      div(classname='tri invert')
      div(classname='tri invert')
      div(classname='tri')
      div(classname='tri invert')
      div(classname='tri')
      div(classname='tri invert')
    |             NEF
    span(classname='badge badge-up badge-danger') {this.state.onlineUsers}
  #navbar(classname='navbar-collapse collapse')
    form(ref='searchForm', classname='navbar-form navbar-left animated', onsubmit='{this.handleSubmit.bind(this)}')
      div(classname='input-group')
        input(type='text', classname='form-control', placeholder='{this.state.totalCharacters', +='', value='{this.state.searchQuery}', onchange='{NavbarActions.updateSearchQuery}')
        span(classname='input-group-btn')
          button(classname='btn btn-default', onclick='{this.handleSubmit.bind(this)}')
            span(classname='glyphicon glyphicon-search')
    ul(classname='nav navbar-nav')
      li
        a(to='/') Home
      li
        a(to='/stats') Stats
      li(classname='dropdown')
        a(href='#', classname='dropdown-toggle', data-toggle='dropdown') Top 100
          span(classname='caret')
        ul(classname='dropdown-menu')
          li
            a(to='/top') Top Overall
          li(classname='dropdown-submenu')
            a(to='/top/caldari') Caldari
            ul(classname='dropdown-menu')
              li
                a(to='/top/caldari/achura') Achura
              li
                a(to='/top/caldari/civire') Civire
              li
                a(to='/top/caldari/deteis') Deteis
          li(classname='dropdown-submenu')
            a(to='/top/gallente') Gallente
            ul(classname='dropdown-menu')
              li
                a(to='/top/gallente/gallente') Gallente
              li
                a(to='/top/gallente/intaki') Intaki
              li
                a(to='/top/gallente/jin-mei') Jin-Mei
          li(classname='dropdown-submenu')
            a(to='/top/minmatar') Minmatar
            ul(classname='dropdown-menu')
              li
                a(to='/top/minmatar/brutor') Brutor
              li
                a(to='/top/minmatar/sebiestor') Sebiestor
              li
                a(to='/top/minmatar/vherokior') Vherokior
          li(classname='dropdown-submenu')
            a(to='/top/amarr') Amarr
            ul(classname='dropdown-menu')
              li
                a(to='/top/amarr/amarr') Amarr
              li
                a(to='/top/amarr/ni-kunni') Ni-Kunni
              li
                a(to='/top/amarr/khanid') Khanid
          li(classname='divider')
          li
            a(to='/shame') Hall of Shame
      li(classname='dropdown')
        a(href='#', classname='dropdown-toggle', data-toggle='dropdown') Female
          span(classname='caret')
        ul(classname='dropdown-menu')
          li
            a(to='/female') All
          li(classname='dropdown-submenu')
            a(to='/female/caldari') Caldari
            ul(classname='dropdown-menu')
              li
                a(to='/female/caldari/achura') Achura
              li
                a(to='/female/caldari/civire/') Civire
              li
                a(to='/female/caldari/deteis') Deteis
          li(classname='dropdown-submenu')
            a(to='/female/gallente') Gallente
            ul(classname='dropdown-menu')
              li
                a(to='/female/gallente/gallente') Gallente
              li
                a(to='/female/gallente/intaki') Intaki
              li
                a(to='/female/gallente/jin-mei') Jin-Mei
          li(classname='dropdown-submenu')
            a(to='/female/minmatar') Minmatar
            ul(classname='dropdown-menu')
              li
                a(to='/female/minmatar/brutor') Brutor
              li
                a(to='/female/minmatar/sebiestor') Sebiestor
              li
                a(to='/female/minmatar/vherokior') Vherokior
          li(classname='dropdown-submenu')
            a(to='/female/amarr') Amarr
            ul(classname='dropdown-menu')
              li
                a(to='/female/amarr/amarr') Amarr
              li
                a(to='/female/amarr/ni-kunni') Ni-Kunni
              li
                a(to='/female/amarr/khanid') Khanid
      li(classname='dropdown')
        a(href='#', classname='dropdown-toggle', data-toggle='dropdown') Male
          span(classname='caret')
        ul(classname='dropdown-menu')
          li
            a(to='/male') All
          li(classname='dropdown-submenu')
            a(to='/male/caldari') Caldari
            ul(classname='dropdown-menu')
              li
                a(to='/male/caldari/achura') Achura
              li
                a(to='/male/caldari/civire') Civire
              li
                a(to='/male/caldari/deteis') Deteis
          li(classname='dropdown-submenu')
            a(to='/male/gallente') Gallente
            ul(classname='dropdown-menu')
              li
                a(to='/male/gallente/gallente') Gallente
              li
                a(to='/male/gallente/intaki') Intaki
              li
                a(to='/male/gallente/jin-mei') Jin-Mei
          li(classname='dropdown-submenu')
            a(to='/male/minmatar') Minmatar
            ul(classname='dropdown-menu')
              li
                a(to='/male/minmatar/brutor') Brutor
              li
                a(to='/male/minmatar/sebiestor') Sebiestor
              li
                a(to='/male/minmatar/vherokior') Vherokior
          li(classname='dropdown-submenu')
            a(to='/male/amarr') Amarr
            ul(classname='dropdown-menu')
              li
                a(to='/male/amarr/amarr') Amarr
              li
                a(to='/male/amarr/ni-kunni') Ni-Kunni
              li
                a(to='/male/amarr/khanid') Khanid
      li
        a(to='/add') Add

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
