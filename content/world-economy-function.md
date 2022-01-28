---
title: To see a world in a 3D array and an economy in a function
slug: world-economy-function
description: "I've always hoped that the games I create contain worlds that function similarly to our own. Not just because trying to recreate reality with 1s and 0s is an exciting challenge, but also because of the potential emergent gameplay, stories, and possibility for reflection on our current systems."
thumbnail: "https://res.cloudinary.com/shianra/image/upload/v1643306933/ai-dreams/covers/thumbnails/visual-stories-micheile-SoT4-mZhyhE-unsplash_l5d2ba.jpg"
cover: "https://res.cloudinary.com/shianra/image/upload/v1643306931/ai-dreams/covers/visual-stories-micheile-SoT4-mZhyhE-unsplash-min_z3vs7s.jpg"
date: "2022-01-28"
category: "function"
tags:
  - game development
  - game economy
timeToRead: "1699 words, ~7 minutes"
---

I've always hoped that the games I create contain worlds that function similarly to our own. Not just because trying to recreate reality with 1s and 0s is an exciting challenge, but also because of the potential emergent gameplay, stories, and possibility for reflection on our current systems. Furthermore, while modelling player needs and interactions can quickly become tedious with increased complexity, a complex world can make the experience even more fascinating.

Within a computer game, this world system will run on its own in the background, allowing people and places to change without direct influence from the player. So often, games feel empty because nothing happens that isn't relevant to the player or the carefully crafted story. If elements of the world can change over time without the player having any direct influence whatsoever, the player will feel as though they are more a part of something rather than its entirety.

With tabletop RPGs, this world system can provide locations and people for the adventurers to visit and interact with without the GM having to create them beforehand all on their own or think them up from scratch on the spot. Therefore the GM will no longer have to track consistency with spontaneous worldbuilding. Furthermore, I can build on the simulator to allow direct modification of the world to inject the players' influence. For example, murdering a wanted criminal, marrying the local barmaid and purchasing a house, opening up a business and getting a monopoly on alcoholic beverages, riding a dragon into the capital and burning down the castle, and so on.

I still wish to work towards this goal because I continue to find myself dissatisfied with how much of an afterthought economics and politics are in games. Both appear highly complex in the real world, seemingly following a logic that is not easy to comprehend, much less model with code. However, much of this is due to mainstream economic theory suffering from different shortcomings.

For example, value gets simplified into the most basic supply and demand forces, even in the simulation genre. On the surface, this seems satisfactory enough because that's what school teaches us about how the world works: supply and demand are the driving forces in price fluctuations. However, where did the original starting price around which the changes occur originate? In games, it's either a number someone made up or some simplified sum of material costs and desired profit.

Why are they made up, seemingly out of nothing? Because a supply and demand graph cannot anticipate the price of a particular product. It can only tell us that the price is currently or was what it should be, but it cannot predict - a requirement for an effective model. The model relied on by this approach was shown utterly unrealistic over the decades, but it remains the starting point even for more advanced economics.

Therefore, I hope to take my knowledge, build on it with the assistance of others, and construct a less idealistic simulation of our society. Hopefully, a side effect of these simulated worlds is in allowing criticisms of the systems currently in place in the real world by showing them in action in a more realistic manner within an accessible simulation. If I achieve that much, I can work towards emphasising how we can still lead into a world that functions beyond our current profit incentive focused models.

So let's get to work by defining some things first.

The people of the world are individual **Persons**. Each Person will have a set of stats covering everything from long-term abilities and states to short-term conditions. A Person becomes a **Worker** when considering their existence from the perspective of a **Business.**

## Currency and exchange

To keep things simple, we will use some form of dollars. However, there will be a greater amount of decimal point freedom in modern settings to emulate the move from having physical cent coins to digital currency.

## Labour and production

We'll classify the resources used to create and sell products and services using three main categories - **Materials Cost**, **Worker Effort**, and **Operating Costs**.

## Materials Cost

Material Costs are the cost of obtaining all the materials required to create products or provide services that go directly into the aforementioned product or service. Because this is on a per-product and service basis, this does not include the more complex concept of Operating Costs, as that is used to create or provide multiple products and services and has ongoing costs which need to be considered.

For example, a Business that puts a car together will purchase metals, rubbers, plastics, and so on from other companies. Therefore, the amount of money they spend on all of these things is the Materials Cost.

## Worker Effort

Worker Effort is the time a Worker spends in creating the product to be sold. It represents the time spent at the current stage of creating the product.

For example, in a service such as changing the tyres on a car, the time it takes for the employee to change the tyres will be the Worker Effort. In this example, we're looking at the Business that did the tyre changing using tyres bought from another Business, and not the Business that made the tyre. For each Business, we only consider the Worker Effort of its employees and not the goods or services it has purchased off other Businesses.

Therefore, in constructing a car, the Business sources tyres from another company by purchasing them. Then the Worker Effort that went into creating those tyres does not count for this Business. However, the car will most likely be assembled by other machines that were assembled and are both run and maintained by Workers. Because running them usually requires interaction, often to feed materials to the machines as part of the manufacturing process itself, this counts as Worker Effort. Meanwhile, the latter is covered by Operating Costs.

Worker Effort is essential in calculating the Energy expended by the Workers and the amount of potential profit when the product is sold since the Worker will be paid for their time.

## Operating Costs

The use of tools and machinery in creating products is considered an Operating Cost because they can be used to create or provide multiple products and services and require upkeep.

Each piece of equipment will have an **upfront cost** - that is, the cost of buying it. When the equipment breaks down so much that it requires replacement, the Business will be forking out the upfront cost of another piece of equipment.

These items will endure wear and tear in some form or another, requiring maintenance. To simplify things, the costs to maintain equipment will be considered its **ongoing cost**. The ongoing cost will cover everything from the cost of the cleaning product used to wipe it down after use to the coal or electricity fed into it.

These Operating Costs must also be factored into the final price of any product; otherwise, the Businesses might lose money overall.

## Further Examples

The reason for having three different categories instead of less is because Operating Costs require extra variables that are to be tracked over time, whilst Material Costs represent consumables that are often lost during production, and Worker Effort is essential to generating profit. However, one thing to note is that there will be examples where not all three are applicable.

For example, there is no Material Cost in a lumberjack Businesses collecting wood from an existing forest. How can we then determine what the cost of collecting the wood is? Worker Effort and Operating Costs apply to this case because people are hired to cut down the trees, and said Workers use equipment.

Another example might be a blackjack dealer working in a casino. In this case, the casino would be the Business and the blackjack dealer, a Worker. If the casino pays for and maintains the uniform used by the blackjack dealer, it would count as an Operating Cost. However, if they do not, the Worker carries the burden. The same will occur in similar situations, especially where uniforms are involved, potentially influencing how much the Worker gets paid for their work.

## How renting fits in

An example might be the shop that one owns in town. They do not live or sleep there, but they bought and own the shop. The purchase of the shop has placed the shop building and land the shop sits on into their Possessions. This is because including the land allows the shop owner to go as far as tearing down the whole building and constructing a new one as they see fit without any issues in handling ownership. Without it, the building object would be deleted, and there'd no longer be any tracking of the fact that the Person owns something there. Either way, if they now rent out the shop building, it does not leave their Possessions - it merely gains the Asset trait and becomes an Operating Cost for the Person renting.

The shop example is simple because it involves one building owned by one Person and being rented to another. But what about a shopping mall or apartment complex owned by one entity, such as a Business or Person?

In this case, the building and its land will still appear as a Possession and Asset of said Person or Business. However, to rent it out, they have to set it up as a profit-creating entity itself - this is what the Asset trait will indicate. This will allow the game to calculate costs from the correct perspective and apply any Business-related modifiers to it, such as those that may come in the form of government policy or tax. It will also allow the building to be segmented and have prices assigned to each section, turning them into services, which will count towards the overall availability and demand of itself and similar services.

Doctor's offices often work using this fashion, where the GP will rent out a room in a medical centre. Through this, they gain access to the centre's equipment, tools, medications, and facilities, including reception handling their bookings and applications for maintaining and storing patient records.

---

Image: <a href="https://unsplash.com/photos/SoT4-mZhyhE" rel="noopener" target="_blank">Micheile</a>
