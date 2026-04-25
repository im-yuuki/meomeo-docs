---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Hello!"
  text: "meow meow meow meow meow"
  tagline: "various documentations for what I am working on 😛"
  image:
    src: /image.png
  actions:
    - theme: brand
      text: Read documents
      link: /docs/
    - theme: alt
      text: Useless button
    - theme: alt
      text: Useless button (again)

features:
  - title: 📚 Feature A
    details: 123
  - title: ⚡ Feature B
    details: 456
  - title: ✅ Feature C
    details: 789
---

<br />

# Contributors

<script setup>
import { VPTeamMembers } from "vitepress/theme"

const members = [
  {
    avatar: "https://www.github.com/im-yuuki.png",
    name: "Yuuki",
    title: "Owner",
    links: [
      { icon: "facebook", link: "https://www.facebook.com/june8th.dan" },
      { icon: "github", link: "https://github.com/im-yuuki" },
    ],
  },
]
</script>

<VPTeamMembers size="small" :members />