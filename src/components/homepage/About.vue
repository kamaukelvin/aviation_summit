<template>
  <div class="row" id="about">
    <div class="col-md-4 offset-md-1 col-12">
      <div class="about-excerpt-left">
        <h2 class="font-weight-bold">
          "Re-imagining aviation in a post-covid world"
        </h2>
      </div>
    </div>
    <div class="col-md-6 col-12">
      <div class="about-excerpt-right">
        <h4 class="">
          Historically, air transport has doubled in size every fifteen years
          and has grown faster than most other industries. This projection has
          however been seriously disrupted by the global pandemic, that has
          heavily impacted and forever changed the way we travel. In light of
          this, the Aviation & Travel sector increasingly needs to reimagine how
          it exits in order to remain sustainable in the long run.
        </h4>
      </div>
    </div>
    <div class="col-12">
      <div class="container">
        <p>
          Kenya Airways recognizes that Aviation is a forward-looking industry
          that stimulates development and entrepreneurship, and which
          continuously seeks to enhance its efficiency and effectiveness. In a
          post-Covid 19 world, innovation and co-creation across the entire
          aviation ecosystem is the catalyst for growth that will the
          much-needed business solutions to secure a sustainable future.We
          understand that the narrative around air travel in Africa needs to be
          transformed from being perceived as a luxury to a vital necessity in
          facilitating economic growth and development through enabling
          intra-Africa trade.This can only be achieved by engaging and
          co-creating with the whole eco- system to re-imagine and innovate
          towards a prosperous Africa.
        </p>
      
        <p>
          It is for this reason that the Kenya Airways Fahari Innovation Hub has
          curated a Summit with the theme, ‘Reimagining Aviation in a Post-Covid
          World’, that seeks to bring together different players in the aviation
          ecosystem to kickstart the process of collectively reimagining the
          future of aviation and travel in Africa, as a key enabler for economic
          growth and development. The Summit dubbed, ‘Africa Aviation & Travel
          Innovation Summit’, slated for the 22nd - 24th November 2021, will be
          an in-person event held at the Ole Sereni hotel, Nairobi.
        </p>
        <div class="my-md-5 py-md-5">
          <h4 class="mb-0">Specific objectives of the summit include:</h4>
          <ul>
            <li>
              To kickstart the process of collectively reimagining the future of
              aviation and travel in Africa.
            </li>
            <li>
              Present perspectives on practical innovation in the aviation
              ecosystem
            </li>
            <li>
              Showcase KQ design challenge and kick-start the process of
              accelerating the winning companies
            </li>
            <li>
              Attract funding for co-creating opportunities with start-ups
            </li>
            <li>Forge new value-adding partnerships</li>
            <li>
              Identify emerging trends, models and technologies, disrupting the
              aviation and travel industry.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "About",
};
</script>

<style scoped>
.about-excerpt-left {
  margin: 80px 10px 40px 80px;
  text-align: right;
  font-weight: 600;
  color: var(--main-color);
}
.about-excerpt-right {
  margin: 80px 80px 40px 10px;
}
ul {
  list-style: none;
  padding: 0;
  font-size: 16px;
}
li {
  padding-left: 2.3em;
}
li:before {
  content: "\e900";
  font-family: Icomoon;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: -1em;
  width: 0px;
  font-size: 25px;
  margin-bottom: -30px;
  margin-top: 32px;
  color: #cbb677;
}
p{
    opacity:0.7
}
@media only screen and (max-width: 600px) {
  .about-excerpt-left {
  text-align: center;
  margin: 2em 0 0 0;
  padding:12px
}
  .about-excerpt-right {
  margin:  0;
  padding:12px
}
}
</style>
