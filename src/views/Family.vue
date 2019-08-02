<template>
  <div class="page-content" :class="{mounted: mounted}">
    <div class="page-content__inner">
      <div class="left">
        <Appearable>
          <h1 class="ap-child">
            One of the first things a therapist asks you when you sit down on that uncomfortable lounge chair is your relationship with your family.
          </h1>
        </Appearable>
        <Appearable>
          <p class="ap-child">
            And if you’ve been living in denial long enough to still have avoided therapy, you still get asked that question when you see any type of doctor. This is the go-to question that every professional will ask you when they’re trying to figure out what is wrong with you.
          </p>
        </Appearable>
        <Appearable>
          <p class="ap-child">
            It makes sense why every therapist wants to pry through your family tree. 
            Genetics and family relationships 
            <a href="http://google.com" target="_blank" @mouseenter="elementHover" @mouseleave="elementLeave">
              heavily contribute to your likelihood of having depression
            </a>
            because family dynamics form an early foundation for you to base your life perspective and relationships.
            Stressors during formulative childhood years tend to roll over into adulthood, 
            and soon enough you’re a sad adult sitting on that lounge chair wondering how the hell you got here.
          </p>
        </Appearable>
      </div>
      <div class="right"></div>
    </div>
    <div class="page-content__inner">
      <Appearable :threshold="0.2">
        <div class="full ap-child">
          <img :src="imageOne" alt="">
        </div>
      </Appearable>
    </div>
    <div class="page-content__inner" ref="containerOne">
      <div class="left">
        <Appearable>
          <p class="ap-child">
            When it comes to therapy, I never know how to answer questions about my family.
            I know these professionals are trying to weed me out, figure out if I have daddy issues, 
            if I was abused, if I wasn’t hugged enough when I was a child. But I had a relatively 
            comfortable childhood. I grew up in a Vietnamese household in the boring suburbs of San Jose, 
            California, where over 30% of the population was Asian. I had seen plenty of kids that 
            dealt with tiger moms, overly controlling dads, and totalitarian environments 
            where grades dictated their worth. 
          </p>
        </Appearable>
        <Appearable>
          <p class="ap-child">
            Compared to that, I was lucky. Both of my parents worked full-time, so I had little 
            interaction with them other than the mornings before school and the evenings when 
            they would pass by my room. Our household was a much more casual environment, where 
            I didn’t have to eat dinner with them, talk to them, or follow curfew. That may sound 
            like a lonely dynamic for a child to have, but I never thought of it that way. I was 
            content with just hanging out with my friends afterschool, watching anime with my sister, 
            and spending all of my free time on the computer, which contained an entirely vast universe 
            that brought perspective beyond my little world.
          </p>
        </Appearable>
        <Appearable>
          <p class="ap-child">
            My sister, eight years older, indirectly taught me that the less interaction I 
            had with our parents, the better. She had explosive reactions to everything our 
            parents did. A small annoyance would incite eye-rolling, yelling, and shrieking 
            that would echo around the house. Her contagious anger would immediately turn my 
            attitude from content to sour, as I was quick to take her side and adapt her 
            mannerisms. She refused to address my father as a dad, and we gave him the 
            nickname “That Man” (or, if we were talking to our mother, “Your Husband”)—verbally 
            stripping him of any relation to us.
          </p>
        </Appearable>
        <Appearable>
          <p class="ap-child">
            My understanding as a child was limited to our parents simply being annoying and 
            stupid, so I would talk to them in a brash manner without understanding the source 
            of where all that mimicked anger came from. It wasn’t until middle school when my 
            sister, who was away at college, brought up some of her childhood memories in the 
            middle of a late-night text conversation. She talked about our drunken father 
            stomping down the staircase, spilling knives out of the cabinets and threatening 
            to cut off his fingers. She recalled our mother crying in the car and telling 
            my sister that she wished she could leave him, but couldn’t because of her.
          </p>
        </Appearable>
      </div>
      <div class="right">
        <Appearable>
          <ScrollingHeading
            class="ap-child"
            copy="My sister, eight years older, indirectly taught me that the less interaction I had with our parents, the better."
            :mounted="mounted"
            :container="$refs.containerOne"
          />
        </Appearable>
      </div>
    </div>
    <div class="page-content__inner">
      <Appearable :threshold="0.2">
        <div class="full ap-child">
          <img :src="imageTwo" alt="">
        </div>
      </Appearable>
    </div>
    <div class="page-content__inner" ref="containerTwo">
      <div class="left">
        <Appearable>
          <p class="ap-child">
            My father doesn’t have a drinking problem anymore, and my parents seem to be fine with their marriage now, since my mother often insists 
            to my sister that he’s changed. But other problems surfaced as I grew older. The most prominent was their financial irresponsibility. 
            They spent excessively on giant TV screens and fake designer bags while my sister would criticize any of my desires to buy something, 
            harping that we didn’t have enough money for that. They would take us on trips to Las Vegas and sit at the slot machines for hours while we 
            stayed in hotel rooms, bored out of our minds. By the time I went to college, my mother told me to take out every single loan the university 
            offered throughout all four years because we couldn’t afford tuition. But every time I visited home, my grandmother would privately rant and 
            cry to me about how much money they’d blown away, taking weekend trips to casinos and draining their bank accounts. 
          </p>
        </Appearable>
        <Appearable>
          <p class="ap-child">
            Pathological gambling and drinking shouldn’t be a surprise to non-white families, since these addictions are prevalent for many ethnic minorities. 
            In fact, Southeast Asian and Cambodian refugees in the U.S. have <a href="http://google.com" @mouseenter="elementHover" @mouseleave="elementLeave">reported rates of gambling disorder as high as 59%</a>. 
            Whether these vices are due to acculturative stress or culturally normalized traditions, I don’t know. What I do know is that money was a limiting supply that was, 
            in my family, constantly running out.
          </p>
        </Appearable>
        <Appearable>
          <p class="ap-child">
            Watching their financial indiscretions throughout the years made me feel incredibly guilty every time I spent money, because I felt like I’d 
            never have enough. I learned to kill any desire for material items or luxuries. I never asked for gifts. I skipped graduation trips because 
            I didn’t want to spend more money. When I had to buy things out of necessity, like toiletries and clothes, I’d purchase the cheapest price 
            available. And if I woke up past noon on a weekend, I saw it as good news that I was able to save a few dollars by skipping meals and not using electricity. 
          </p>
        </Appearable>
      </div>
      <div class="right">
        <Appearable>
          <ScrollingHeading
            class="ap-child"
            copy="I learned to kill any desire for material items or luxuries."
            :container="$refs.containerTwo"
            :mounted="mounted"
          />
        </Appearable>
      </div>
    </div>
    <div class="page-content__inner">
      <Appearable :threshold="0.2">
        <div class="full ap-child">
          <img :src="imageThree" alt="">
        </div>
      </Appearable>
    </div>
     <div class="page-content__inner" ref="containerThree">
      <div class="left">
        <Appearable>
        <p class="ap-child">
          In some way, my intuition was correct. During my junior year of college, I got a 
          text from my sister in the midst of her jarring discovery: she was $20,000 in debt 
          because our parents had been opening cards under her name and maxing it out for the 
          past 10 years. She confronted them about it, but they reacted defensively, either 
          pretending like they were going to pay it off eventually or telling her to stop bringing 
          it up because “money doesn’t matter”. For the next few days, my sister and I texted and 
          called each other to figure out what to do about the debt and dishonesty. Ultimately, 
          she paid it off herself without filing any fraud or police reports. She would repeat 
          this twice for the next few months when we found out out that they opened a few more cards.
        </p>
        </Appearable>
        <Appearable>
          <p class="ap-child">
            By the third time it happened, my sister felt more helpless than ever, crying over 
            the phone to me that there was no way she could stop them. After all, identity fraud 
            is too easy when the criminals in question are the only other people in the world who 
            know your birthday and social security. I kept telling her to report them to the police 
            and cut ties completely, but she never did. As a single doctor in her 30s, who lived alone 
            and hated her job, she explained that she had nothing else in her life but them.
          </p>
        </Appearable>
        <Appearable>
          <p class="ap-child">
            That became one of the integral differences between my sister and me. While she still remains 
            attached to our parents, visiting them every other weekend and even spending vacations with them, 
            I gradually began to distance myself further from the family. I moved across the country and 
            stopped taking their calls and responding to their texts. Whenever I was back in town, I only used 
            their house as a free AirBnB, and spent most of my time and energy among friends instead. I was 
            content with this arrangement to reap the benefits of free housing within my hometown without the 
            emotional labor of parents who truly didn’t give a fuck about robbing you.
          </p>
        </Appearable>
        <Appearable>
          <p class="ap-child">
            When I found out that my father opened a card under my name and maxed it out for over two years, 
            I took out any emotion from the unsurprising discovery and jumped straight to the process. I spent 
            the next few days filing identity fraud reports, setting up alerts, and talking to 5 different police 
            stations. Like every process involving the police and government, the whole ordeal was stressful and 
            longwinded. But by the time I was done, I sent a formal yet thinly-veiled threatening email to my parents 
            explaining in detail about the reports, the police, and how I didn’t have any shred of guilt about 
            suing them if they repeated this offense.
          </p>
        </Appearable>
        <Appearable>
          <p class="ap-child">
            It was cold and calculated, and it was my way of dealing with the situation responsibly and efficiently. 
            I talked to a coworker about it later, and as a father of two children who were around the same age as 
            me, he told me that he couldn’t imagine how a parent could do something like this to their children.
          </p>
        </Appearable>
        <Appearable>
          <p class="ap-child">
            “Parents are supposed to be the ones who take care of you and look out for you,” he said, 
            “but instead yours did this.” For the first time, and only time, I started crying.
          </p>
        </Appearable>
      </div>
      <div class="right">
        <Appearable>
          <ScrollingHeading
            class="ap-child"
            copy="“Parents are supposed to be the ones who take care of you and look out for you,” he said, “but instead yours did this.”"
            :container="$refs.containerThree"
            :mounted="mounted"
          />
        </Appearable>
      </div>
    </div>
    <div class="page-content__inner">
      <Appearable :threshold="0.2">
        <div class="full ap-child">
          <img :src="imageFour" alt="">
        </div>
      </Appearable>
    </div>
    <div class="page-content__inner" ref="containerFour">
      <div class="left">
        <Appearable>
          <p class="ap-child">
            The results were inconsequential: my mother ignored my email, following her usual pattern of avoiding problems and sweeping them under the rug. My father formed a half-assed apology, feigning innocence that he forgot to cancel the card, even though the statements showed he had been using it every month until I canceled it. As always, I didn’t reply to them and moved on with the rest of my life. I was simply glad that I had scared them off. My sister, on the other hand, still visits them every other weekend.
          </p>
        </Appearable>
        <Appearable>
          <p class="ap-child">
            Although my sister thinks she needs a family, I know that I don’t. Since childhood I’ve been used to sharing meals by myself, and for years I’ve taking care of myself financially, physically, and mentally. The only time I notice that missing piece where a family should be is when the holiday seasons roll along: all the streets are closed down, social feeds become cluttered with photos of delicious food, and I usually sleep the whole day away until the world returns back to its regular routine. To me, that is enough.
          </p>
        </Appearable>
        <Appearable>
          <p class="ap-child">
            No family is the same, but I’ve found that there is something uniquely dysfunctional about many Asian families. 
            It’s something that I can’t explain very easily, but is innately understood from one Asian to another. Research has found that 
            <a href="http://google.com" target="_blank" @mouseenter="elementHover" @mouseleave="elementLeave">Asian Americans have a 17.3% chance of developing a psychiatric disorder in</a> 
            lifetimes, but are 33% less likely to seek help or even admit to having them compared to white Americans. This is another 
            reason why answering any family-related questions is difficult for me to do and for doctors to gauge, 
            because even if we had any issues throughout the family tree, I wouldn’t know about them.
          </p>
        </Appearable>
        <Appearable>
          <p class="ap-child">
            When I think about the quietly dysfunctional nature of Asian-American families, I am reminded of a serio-comic performance called 
            <a href="http://google.com" target="_blank" @mouseenter="elementHover" @mouseleave="elementLeave">Wong Flew Over the Cuckoo’s Nest</a>. 
            In that performance, comedian Kristina Wong opens up her skit with a conflict that she is trying to solve: the inexplicably high rates 
            of Asian-American women committing suicide. She takes a dark yet tongue-in-cheek approach, singing to the tune of We Are the World: 
            "We are complete... we are perfect... we are the ones who keep killing ourselves but let's start smiling."
          </p>
        </Appearable>
      </div>
      <div class="right">
        <Appearable>
          <ScrollingHeading
            class="ap-child"
            copy="No family is the same, but I’ve found that there is something uniquely&nbsp;dysfunctional about many Asian&nbsp;families."
            :mounted="mounted"
            :container="$refs.containerFour"
          />
        </Appearable>
      </div>
    </div>
    <div class="page-content__inner">
      <Appearable :threshold="0.2">
        <div class="full ap-child">
          <img :src="imageFive" alt="">
        </div>
      </Appearable>
    </div>
    <div class="page-content__inner" ref="containerFive">
      <div class="left">
        <Appearable>
          <p class="ap-child">
            U.S.-born Asian-American women have a 
            <a href="http://google.com" target="_blank" @mouseenter="elementHover" @mouseleave="elementLeave">higher lifetime rate of suicidal thoughts</a> 
            (almost 16%) than that of the general U.S. population (13.5%). Hearing the numbers, I wasn’t surprised. This fact is shocking but intimately 
            familiar to me at the same time. It is something that I can innately understand, even if my lifestyle is vastly different from each Asian girl 
            out there who has considered jumping off a bridge or buying a loaded gun
          </p>
        </Appearable>
        <Appearable>
          <p class="ap-child">
            I am sure that there are several complicated factors that contribute to why families, especially ethnic minorities, deal with alcoholism, 
            gambling addictions, and abuse. I know that mine have faced unfathomable trauma from poverty and immigrating to the States. Certainly, 
            that intergenerational trauma has trickled down the family tree and taken form as our different vices. If I put in the time and effort, 
            I could find out my parents’ stories and try to understand why they are the way that they are. But to be honest, and to probably give an 
            unsatisfying reaction to readers, I don’t care. 
          </p>
        </Appearable>
        <Appearable>
          <p class="ap-child">
            It is my personal belief that I am not obligated to learn about my family’s history, keep in touch with them, or take 
            care of them financially or emotionally. It is not my responsibility to forgive them for their behavior, or learn 
            about their past in order to understand their behavior. Some people may disagree. But I think that is because that 
            is how they would define getting closure. That is not how I define it. I am not interested in spending my energy trying 
            to fix them or learn from them more than what I have already learned by existing
          </p>
        </Appearable>
        <Appearable>
          <p class="ap-child">
            I am a product of my family’s sacrifices with the consequences of loneliness and isolation. The intimate relationships 
            I form today hold heavier weight on me than the average person, because I had not been able to form those emotional connections 
            early on. I am unable to enjoy luxuries—by which I define those as meals over $20 and furniture that was not at the top of the 
            ‘lowest price’ filter on Amazon—without being guilt-ridden over losing money. The difference between my pragmatic decisions and 
            others’ is that people have appropriated “minimalism” as a trend, while I use “minimalism” as a way to clutch onto my learned 
            frugality like a lifejacket.
          </p>
        </Appearable>
        <Appearable>
          <p class="ap-child">
            But I take pride in my ability to be independent. I‘ve moved across the country to live on my own. I expect to finish paying 
            off my $70,000+ student loans before 2020. And I’ve learned to survive and exist without the safety net of family. Rather 
            than live in their shadows and reap what they sow, I would rather move forward to forge my own life.
          </p>
        </Appearable>
      </div>
      <div class="right">
        <Appearable>
          <ScrollingHeading
            class="ap-child"
            copy="I am a product of my family’s sacrifices with the consequences of loneliness and insolation."
            :mounted="mounted"
            :container="$refs.containerFive"
          />
        </Appearable>
      </div>
    </div>
    <div>
    </div>
  </div>
</template>

<script>
import ElementHoverMixin from '@/mixins/element-hover-mixin';
import imageOne from '@/assets/imgs/chapterOne/one.png';
import imageTwo from '@/assets/imgs/chapterOne/two.png';
import imageThree from '@/assets/imgs/chapterOne/three.png';
import imageFour from '@/assets/imgs/chapterOne/four.png';
import imageFive from '@/assets/imgs/chapterOne/five.png';
import ScrollingHeading from '@/components/ScrollingHeading';
import { mapState } from 'vuex';

export default {
  name: 'family',
  mixins: [ElementHoverMixin],
  components: {
    ScrollingHeading
  },
  computed: {
    ...mapState(['heroAnimated']),
  },
  data: () => ({
    mounted: false,
    imageOne,
    imageTwo,
    imageThree,
    imageFour,
    imageFive
  }),
  watch: {
    heroAnimated(val) {
      if (val) {
        this.mounted = true;
      }
    }
  }
}
</script>

<style lang="scss">
.page-content {
  display: none;
  max-height: 0;
  padding-top: 180px;
  padding: 180px 140px;
  &.mounted {
    display: block;
    max-height: 100%;
  }
  &__inner {
    display: flex;
    justify-content: space-around;
    align-items: stretch;
    max-width: 1170px;
    margin: 0 auto;
    &:not(:first-child) {
      margin: 8rem auto;
    }
    .left, .right {
      position: relative;
      width: 38%;
      p {
        max-width: 455px;
        margin-top: 3rem;
      }
    }
    img {
      display: block;
      width: 100%;
      height: auto;
    }
    .full {
      width: 100%;
    }
  }
}
</style>