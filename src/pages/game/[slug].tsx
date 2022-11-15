import Game, { GameTemplateProps } from 'templates/Game';

import galleryMock from 'components/Gallery/mock';

export default function Index(props: GameTemplateProps) {
  return <Game {...props} />;
}

// gerar em build time (/game/bla, /game/foo ...)
export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: 'cyberpunk-2077' } }],
    fallback: false,
  };
}

export async function getStaticProps() {
  const descriptionHTML = `<img src="https://items.gog.com/not_a_cp/addon_en.png"><hr><br><video muted="" preload="auto" loop="" autoplay="autoplay" style="margin: auto;display:block;width:100%"><source src="https://items.gog.com/not_a_cp/action.mp4"></video><br><b>Cyberpunk 2077</b> is an open-world, action-adventure RPG set in the megalopolis of Night City, where you play as a cyberpunk mercenary wrapped up in a do-or-die fight for survival. Improved and featuring all-new free additional content, customize your character and playstyle as you take on jobs, build a reputation, and unlock upgrades. The relationships you forge and the choices you make will shape the story and the world around you. Legends are made here. What will yours be?
<br><br><video muted="" preload="auto" loop="" autoplay="autoplay" style="margin: auto;display:block;width:100%"><source src="https://items.gog.com/not_a_cp/character.mp4"></video><br>Become an urban outlaw equipped with cybernetic enhancements and build your legend on the streets of Night City.
<br><br><video muted="" preload="auto" loop="" autoplay="autoplay" style="margin: auto;display:block;width:100%"><source src="https://items.gog.com/not_a_cp/world.mp4"></video><br>
Night City is packed to the brim with things to do, places to see, and people to meet. And it’s up to you where to go, when to go, and how to get there.
<br><br><video muted="" preload="auto" loop="" autoplay="autoplay" style="margin: auto;display:block;width:100%"><source src="https://items.gog.com/not_a_cp/tech.mp4"></video><br>
Go on daring adventures and build relationships with unforgettable characters whose fates are shaped by the choices you make.
<br><br><video muted="" preload="auto" loop="" autoplay="autoplay" style="margin: auto;display:block;width:100%"><source src="https://items.gog.com/not_a_cp/music.mp4"></video><br><h4>EQUIPPED WITH IMPROVEMENTS</h4>
Experience Cyberpunk 2077 with a host of changes and improvements to gameplay and economy, the city, map usage, and more.
<br><br><h4>INCLUDES FREE ADDITIONAL CONTENT</h4>
Get your hands on a haul of free items including new guns and melee weapons, as well as extra customization options and more.
<br><br><hr><a target="“_blank”" href="https://lp.gog.com/cyberpunk-2077-hub/en"><img alt="" src="https://items.gog.com/not_a_cp/learn_more.png"></a><hr><center><img alt="" width="32%" height="32%" src="https://items.gog.com/not_a_cp/awards/awardscp1.png"><img alt="" width="32%" height="32%" src="https://items.gog.com/not_a_cp/awards/awardscp2.png"></center><hr>

* Exclusive Digital Comic - Cyberpunk 2077: Big City Dreams is available in English only.


      <p class="description__copyrights">
      CD PROJEKT®, Cyberpunk®, Cyberpunk 2077® are registered trademarks of CD PROJEKT S.A. © 2019
CD PROJEKT S.A. All rights reserved. All other copyrights and trademarks are the property of their
respective owners.
  </p>`;

  return {
    props: {
      cover:
        'https://raw.githubusercontent.com/Won-Games/client/48dc534d44bcb0f0175e373093d3c85bc178a353/public/img/games/cyberpunk-1.jpg',
      gameInfo: {
        title: 'Cyberpunk 2077',
        price: '59.00',
        description:
          'Cyberpunk 2077 is an open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification. You play as V, a mercenary outlaw going after a one-of-a-kind implant that is the key to immortality',
      },
      gallery: galleryMock,
      description: descriptionHTML,
      details: {
        developer: 'CD PROJEKT RED',
        releaseDate: '2020-12-10T23:00:00',
        platforms: ['windows'],
        publisher: 'CD PROJEKT RED',
        rating: 'BR18',
        genres: ['Action', 'Role-playing'],
      },
    },
  };
}
