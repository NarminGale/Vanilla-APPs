const lorem = [
  `I'm baby squid unicorn subway tile poutine blue bottle hammock. Tilde flexitarian disrupt schlitz tousled succulents umami cliche. Taxidermy 8-bit man braid keffiyeh sartorial. Vexillologist roof party vape viral, polaroid lomo brunch twee deep v aesthetic food truck. Aesthetic gastropub before they sold out activated charcoal. Godard adaptogen skateboard, migas synth green juice fam 8-bit echo park.`,
  `Banjo thundercats activated charcoal, portland street art sartorial pour-over trust fund selfies artisan blue bottle wolf tattooed. Banjo actually keytar health goth, microdosing readymade cold-pressed cornhole beard bitters stumptown letterpress. Celiac church-key microdosing prism, messenger bag listicle kitsch VHS pour-over salvia portland drinking vinegar kombucha. Brooklyn put a bird on it actually, direct trade authentic pok pok YOLO stumptown cronut man bun hexagon helvetica chillwave pour-over godard.`,
  `Tattooed pinterest cronut, chia actually normcore keffiyeh wolf adaptogen succulents microdosing hella tumeric meggings single-origin coffee. Bicycle rights stumptown tattooed franzen. Neutra cloud bread sartorial, listicle deep v flannel distillery YOLO offal everyday carry dreamcatcher la croix. Intelligentsia before they sold out selvage adaptogen sartorial hell of polaroid chicharrones disrupt semiotics mixtape tote bag tattooed. Distillery kombucha meditation twee intelligentsia drinking vinegar YOLO, tumblr copper mug brunch. Tattooed DIY stumptown dreamcatcher, wayfarers wolf lo-fi meh irony VHS synth bushwick chartreuse. Next level kitsch mlkshk pok pok DIY woke twee YOLO.`,
  `Ramps sustainable vice, normcore artisan taiyaki intelligentsia cred. Hoodie deep v humblebrag salvia, jean shorts organic ethical yr echo park gochujang pinterest scenester gastropub vexillologist live-edge. Distillery food truck green juice, YOLO meditation yuccie artisan microdosing tofu af ugh chicharrones. Lo-fi pinterest wolf kickstarter, neutra fam biodiesel XOXO taiyaki. Sriracha venmo helvetica brooklyn.`,
  `Microdosing fingerstache pork belly hell of portland. Single-origin coffee artisan wayfarers prism. Vinyl 90's gastropub af portland hammock, cornhole direct trade fanny pack cred twee migas. Cardigan artisan hell of, asymmetrical waistcoat truffaut scenester wolf vaporware shoreditch. Locavore cliche taiyaki literally iPhone artisan etsy flannel authentic pour-over fanny pack gentrify. Banjo vegan intelligentsia, paleo live-edge four loko af enamel pin actually subway tile.`,
  `Prism adaptogen shabby chic skateboard gochujang. Art party artisan iceland health goth food truck jianbing. Try-hard craft beer freegan paleo cronut, sustainable lomo. Chambray air plant polaroid thundercats umami semiotics leggings vinyl migas cardigan kitsch. Keffiyeh prism kitsch try-hard put a bird on it cliche pop-up trust fund polaroid. Cray church-key fanny pack, ugh ennui scenester pitchfork glossier dreamcatcher bicycle rights gastropub plaid. Activated charcoal chambray beard, keytar tumblr pok pok vinyl pork belly.`,
  `Food truck distillery gastropub salvia. Tote bag heirloom organic marfa vice tumblr chia live-edge butcher skateboard. Pinterest sartorial prism coloring book. IPhone kickstarter fanny pack wolf pickled, subway tile pork belly shoreditch hell of lomo bespoke hoodie typewriter jean shorts church-key. Tacos pok pok +1, keffiyeh before they sold out migas tilde crucifix fingerstache tattooed blog. YOLO raw denim prism, neutra echo park retro roof party.`,
  `Post-ironic retro authentic, jean shorts beard keffiyeh hexagon fam wolf microdosing pour-over skateboard. Flannel food truck letterpress disrupt portland post-ironic 90's pour-over PBR&B kombucha selfies synth biodiesel meggings. Taiyaki portland paleo cliche williamsburg lomo church-key glossier ennui next level tilde microdosing wayfarers shabby chic. Williamsburg mixtape sartorial wolf pok pok cray paleo, lomo ugh viral sriracha. Twee ugh fingerstache man bun semiotics bitters.`,
  `Fanny pack XOXO fashion axe seitan chia kale chips, tacos cloud bread kombucha man braid listicle subway tile. Drinking vinegar pitchfork fixie next level woke. Gochujang blue bottle meggings brunch. Pinterest man braid fashion axe neutra sartorial.`,
]
const inputLorem = document.getElementById('lorem')
const form = document.querySelector('.lorem-form')
const loremSection = document.querySelector('.lorem-text')
form.addEventListener('submit', function (e) {
  e.preventDefault()
  const value = parseInt(inputLorem.value)
  randomOne = Math.floor(Math.random() * lorem.length)
  if (isNaN(value) || value <= 0 || value > lorem.length) {
    loremSection.innerHTML = `<p class="result">${lorem[randomOne]}</p>`
  } else {
    let text = lorem.slice(0, value)
    text = text
      .map(function (item) {
        return `<p class="result">${item}</p>`
      })
      .join('')
    console.log(text)
    loremSection.innerHTML = text
  }
})
