const backgrounds = [
  {
    img: "https://images.unsplash.com/photo-1517772426385-b95306f095d6",
    icon: "mountain-snow"
  },
  {
    img: "https://images.unsplash.com/photo-1721592560136-1ad17b63aa23",
    icon: "snowflake"
  },
  {
    img: "https://images.unsplash.com/photo-1498036882173-b41c28a8ba34",
    icon: "building-2"
  },
  {
    img: "https://images.unsplash.com/photo-1721834439602-5d044e8ab853",
    icon: "flower-2"
  },
  {
    img: "",
    icon: ""
  },
  {
    img: "",
    icon: ""
  },
  {
    img: "",
    icon: ""
  },
  {
    img: "",
    icon: ""
  },
  {
    img: "",
    icon: ""
  },
  {
    img: "",
    icon: ""
  },
]
/*
{
    img: "",
    icon: ""
  },
*/

document.addEventListener('DOMContentLoaded', function() {
  const bg = backgrounds[Math.floor(Math.random() * backgrounds.length)];

  const icon = document.createElement('i');
  icon.setAttribute('data-lucide', bg.icon);

  const background = document.createElement('div');
  background.style.backgroundImage = `url("${bg.img}?w=1920&auto=format&fit=crop")`;
  background.classList.add('background');

  const mainContent = document.getElementById('main-content');

  mainContent.appendChild(background);
  mainContent.appendChild(icon);

  lucide.createIcons({
    attrs: {
      'stroke-width': 1
    }
  });
})