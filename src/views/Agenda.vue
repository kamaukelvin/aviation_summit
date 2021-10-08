<template>
  <div class="container">
    <h2 id="section-title">Agenda</h2>
    <Hr />
    <p>
      The summit will be an in-person event that will kick off with a
      Demo-Flight and welcome event sponsored by Embraer at Jomo Kenyatta
      International Airport, Nairobi. The Participants and speakers will then be
      transferred to Ole Sereni hotel for registration.
    </p>
    <div class="list">
      <v-row justify="center">
        <v-expansion-panels multiple accordion :value="expanded">
          <v-expansion-panel v-for="(agenda, index) in agendas" :key="index">
            <v-expansion-panel-header color="rgba(167,169,172,0.15)">{{
              agenda.day
            }}</v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-list two-line>
                <div v-for="(item, index) in agenda.items" :key="index">
                  <v-divider
                    v-if="item.divider"
                    :key="index"
                    :inset="item.inset"
                  ></v-divider>

                  <v-list-item :class="item.class" v-else>
                    <div class="time col-md-2 col-5 ">
                      {{ item.time }}
                    </div>

                    <v-list-item-content>
                      <v-list-item-title
                        v-html="item.title"
                      ></v-list-item-title>
                      <v-list-item-subtitle
                        v-html="item.subtitle"
                      ></v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </div>
              </v-list>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>
    </div>
  </div>
</template>
<script>
import Hr from "../components/Hr.vue";
export default {
  name: "Agenda",
  components: { Hr },
  data:()=>({
      expanded: [0, 1, 2],
      agendas: [
        {
          day: "Monday 22nd November, 2021",

          items: [
            {
              time: "1400 - 1700 hr",
              title: "",
              subtitle: "Welcome & Embraer E195 E2 Demo Flight",
            },
          ],
        },
        {
          day: "Tuesday 23rd November, 2021",
          items: [
            {
              time: "0800 – 0930 hrs",
              title: "",
              subtitle: "Registration, Opening Session & Welcome Address",
            },
            { divider: true, inset: true },
            {
              time: "0930 - 1000 hrs",
              title: "Keynote Speech",
              subtitle:
                "How innovative aviation practices can enhance economic impact, ACTFA",
            },
            { divider: true, inset: true },
            {
              time: "1000 - 1100 hrs",
              title: "Panel Discussion",
              subtitle: "Disruptive business models in aviation",
            },

            {
              time: "1100 – 1130 hrs",
              title: "",
              class: "light-bg",
              subtitle: "Networking Break",
            },

            {
              time: "1130 - 1230 hrs",
              title: "Panel Discussion",
              subtitle:
                "How do you ensure passenger safety &amp; security post the pandemic?",
            },
            { divider: true, inset: true },
            {
              time: "1230 - 1330 hrs",
              title: "Panel Discussion",
              subtitle: "Emerging trends on drone technology in Africa",
            },

            {
              time: "1330 – 1430 hrs",
              title: "",
              class: "light-bg",
              subtitle: "Lunch",
            },

            {
              time: "1430 - 1500 hrs",
              title: "",
              subtitle:
                "How a culture of corporate entrepreneurship is driving innovation in aviation",
            },
            { divider: true, inset: true },
            {
              time: "1500 - 1530 hrs",
              title: "Sponsor Session",
              subtitle:
                "Showcase on innovative practices and the future of aviation",
            },
            { divider: true, inset: true },
            {
              time: " 1530 - 1630 hrs",
              title: "Panel Discussion",
              subtitle:
                "Different models that the aviation industry needs to adopt in response to the new world",
            },

            {
              time: "1630 – 1700 hrs",
              title: "",
              class: "light-bg",
              subtitle: "Networking Break",
            },

            {
              time: "1830 - 2100 hrs",
              title: "Gala Dinner",
              subtitle: "The future of tourism in a post-covid world",
            },
          ],
        },
        {
          day: "Wednesday 24th November, 2021",
          items: [
            {
              time: "0900 - 1000 hrs",
              title: "Panel Discussion",
              subtitle:
                "How can the aviation sector co-create with the innovation ecosystem and enable sustainability through co-creation?",
            },
            { divider: true, inset: true },
            {
              time: "1000 - 1045 hrs",
              title: "",
              subtitle:
                "Kenya Airways Fahari Innovation Challenge top 3 presentations",
            },

            {
              time: "1045 – 1115 hrs",
              title: "",
              class: "light-bg",
              subtitle: "Networking Break",
            },

            {
              time: "1115 - 1215 hrs",
              title: "",
              subtitle:
                "Voting, judging, announcement & awarding of overall winner",
            },
            { divider: true, inset: true },
            {
              time: "1215 - 1330 hrs",
              title: "",
              subtitle: "Closing Remarks",
            },

            {
              time: "1330 – 1430 hrs",
              title: "",
              class: "light-bg",
              subtitle: "Lunch and Networking",
            },
          ],
        },
      ],
    }),
};
</script>
<style>
.v-application--is-ltr .v-expansion-panel-header {
  color: #820024;
  font-family: Interstate;
}
.v-expansion-panel-content__wrap {
  padding: 0px;
}
.v-expansion-panel::before {
  box-shadow: none;
}
.v-expansion-panel--active > .v-expansion-panel-header {
  min-height: 48px;
}
.v-application--is-ltr .v-divider--inset:not(.v-divider--vertical) {
  margin-left: 0px;
}
.v-divider--inset:not(.v-divider--vertical) {
  max-width: 100%;
}
.v-list-item__subtitle,
.v-list-item__title {
  overflow: auto;
  white-space: normal;
}
.v-list-item .v-list-item__title {
  font-family: Interstate;
  font-size: 12px;
  color: #03180d;
  opacity: 0.6;
}
.theme--light.v-list-item:not(.v-list-item--disabled) .v-list-item__subtitle,
.time {
  color: #03180d;
  font-family: Interstate;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 32px;
}

.light-bg {
  background: rgba(167, 169, 172, 0.15);
  margin: 1.75rem 0;
}
.list {
  margin-top: 2.5rem;
}
</style>
