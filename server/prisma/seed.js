import bcrypt from 'bcrypt';
import dbClient from '../src/utils/dbClient.js';

async function seed() {
  const password = await bcrypt.hash('123', 8);

  const devUser = await dbClient.user.create({
    data: {
      email: `xtombrock1989@gmail.com`,
      password,
      role: 'DEVELOPER',
    },
  });

  const queenB = await dbClient.user.create({
    data: {
      email: `miss@gmail.com`,
      password,
      role: 'ADMIN',
    },
  });

  const blog1 = await dbClient.article.create({
    data: {
      title: 'Can you fulfil my desires?',
      content: `I have spoken about my hierarchy before briefly here, and this note is to highlight the kind of submissives and slaves that I require to grow that hierarchy.

      Everything needs a foundation, and nothing more so than a Queen's sharp heel keeping you in your place below me, so here are some options on how you can serve me to your best ability. I have provided you with some different choices on what you think would suit you the best in how you best serve me to get my attention and my time, which, as you can imagine, is very precious -
      A regular boot cleaner/worshipper
      
      Line writing (to be marked and corrected by me) - In person and online.
      
      Stress Position training
      
      Chastity key holding
      
      Bimbofication/Sissification (specifics to be discussed)
      
      Long distance or in person anal training/plug training
      
      Shopping Trips - Lingerie, tights, stockings, new outfits. You'll then do a little fashion show for me. If I like the clothes after this point, you'll get to keep them. Otherwise, I will send you back to the shop.
      
      Make overs - Make up you really want to try or make up you really need help with. Make up that will make you feel like a total sissy slut. This includes writing on your body/drawing on you.
      
      Nails - Going with you to get them done, or painting them myself - The colour and style to be my choice, unless previously discussed and agreed.
      
      Dressing Up and Sissy Training - Making you dress like a true sissy, working from the bottom up to make a complete outfit - from underwear, to outfit to heels, to hair and jewelry, and then of course the best way to walk, behave, move as an add on.
      
      Performance - Ill teach you how to move/dance/use your body and youll put on a little show for me to show me what you have learnt and that you have been paying attention to my guidance.
      Pet training - teaching you how to be the best pet you can be - to eventually include your own leash, collar, bowls and cage/tail
      
      For all my other service needs, here is what I want from you -
      
      The Useful Ones - For those who want to be in service to me. These are for regular, reliable subs -
      DIY
      Gardener
      Maid
      Chauffer (fet events/workshops/parties for me and my friends)
      Human Furniture
      
      The Filthy Ones - For those who are disgusting little animals, here is something you can beg for from me -
      Dirty Underwear
      Smelly socks/tights/stockings
      Nail clippings
      Sweaty/used sports wear/shoes
      
      The Romantic Ones - If you are a little more on the shy side, or feel a little more gentle towards your kinks, here is a little something extra you can ask of me -
      Hand written notes from my very own hand
      Personal voice clips from myself
      Personal video clips from myself
      A Masseuse for myself - I need it, you come running to provide it
      
      I know what you're thinking. Feel free to panic but it will be a waste of energy - A video call or real time meet will be required as an initial step, once we have talked and I find something about you interesting.
      
      Can you fulfil any of my needs? Are you willing to step into the first Level of my Hierarchy?`,
    },
  });
}

seed().catch(async (error) => {
  console.error(error);
  await dbClient.$disconnect();
  process.exit(1);
});
