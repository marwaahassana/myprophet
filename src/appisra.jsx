import React from 'react';
import i18n from 'i18next';
import Mynavbar from './components/navbar';
import Myfooter from './components/footer';
import { Container, Card } from "react-bootstrap";
import { useTranslation, initReactI18next } from 'react-i18next';
import { useEffect } from 'react';
if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources: {
      en: {
        translation: {
          webname: "Prophet Muhammad (PBUH)",
          chapterlife: "Biography",
          birth: "Birth",
          childhood: "Childhood",
          youth: "Youth",
          passing: "Passing",
          button: "العربية",
          resources: "Resources",
          sitemp: "Site Map",
          about: "About",
          cprt: "© 2026 Prophet Muhammad (PBUH). All rights reserved.",
          design: "Designed by Marwa Hassan",
          articleisra:`
          The Prophet ﷺ suffered a massive shock with the death of his wife, Lady Khadijah, who had been the finest wife to him through her loyalty, support, and compassion. At the same time, he lost another pillar of support—his uncle Abu Talib, who used to protect him from the harm and tyranny of the polytheists. Consequently, Quraysh succeeded in harming the Prophet, a success they could not easily achieve during the lifetime of Abu Talib.

Ibn Ishaq said:

"Then Khadijah bint Khuwaylid and Abu Talib passed away in the same year. Misfortunes followed consecutively for the Messenger of Allah ﷺ with the death of Khadijah—who was a sincere adviser to him in Islam, to whom he would vent his grief—and the death of his uncle Abu Talib, who was his pillar, a sanctuary in his affairs, and a helper against his people. This happened three years before his migration (Hijrah) to Medina. When Abu Talib passed away, Quraysh inflicted harm upon the Messenger of Allah ﷺ that they could never have hoped to achieve during Abu Talib's life, to the point that a foolish man from Quraysh intercepted him and threw dust onto his head."

The Prophet ﷺ expressed his deep grief over the passing of his uncle Abu Talib, who used to ward off much harm from him. When that foolish man threw dust on the head of the Messenger of Allah ﷺ, the Messenger of Allah ﷺ entered his house with the dust still on his head. One of his daughters stood up and began washing the dust off him while weeping, but the Messenger of Allah ﷺ told her:

"Do not weep, my daughter, for Allah will protect your father."

He later said:

"Quraysh never inflicted anything undesirable upon me until Abu Talib died."

The Prophet's Journey to Al-Ta'if
The Prophet ﷺ spared no effort in spreading Islam and calling his people to the new religion. Meanwhile, Quraysh grew increasingly abusive and exhausting toward the Muslims. Therefore, the Prophet ﷺ thought about opening a new frontier for the call outside the walls of Mecca, hoping to find support and endorsement. Thus, we see him heading to Al-Ta'if to invite its leaders and people to Islam, but he met with nothing from them but rejection, harm, and mockery.

The Messenger of Allah ﷺ met with the chiefs of the Thaqif tribe in Al-Ta'if, who were three brothers: Abd Yalayl bin Amr, Mas'ud bin Amr, and Habib bin Amr. The Messenger of Allah ﷺ sat with them, presenting Islam to them, explaining its principles, and seeking their support and endorsement. However, the three of them gave him the worst possible reply and mocked him.

Ibn Ishaq narrated their responses:

One of them said: "He would be tearing down the cloths of the Kaaba if Allah has truly sent you!"
The second said: "Could Allah find no one else to send besides you?"
The third said: "By Allah, I will never speak to you. If you are indeed a messenger from Allah as you say, you are far too dangerous for me to refute. And if you are lying against Allah, it is not fitting for me to speak to you."

So the Messenger of Allah ﷺ stood up and left them, having lost all hope of receiving any good from Thaqif.

The people of Al-Ta'if did not stop at rejecting the message of Islam; they incited their children and servants to pelt the Prophet with stones until noble blood flowed down his heels. In this sorrowful atmosphere of intense distress, the Prophet turned to Allah in supplication, saying:

"O Allah, to You I complain of my weakness, my lack of resources, and my humiliation before the people. O Most Merciful of the merciful, You are the Lord of the weak, and You are my Lord. To whom do You entrust me? To a distant stranger who shows me hostility, or to an enemy to whom You have given control over my affairs? If You are not angry with me, then I do not care, but Your protection is more encompassing for me. I seek refuge in the light of Your Face, by which the darknesses are illuminated and the affairs of this world and the Hereafter are set right, lest Your wrath descend upon me or Your displeasure befall me. To You belongs all rights to admonish until You are pleased, and there is no power or might except through You."

Allah swiftly answered the prayer of His Prophet and sent Angel Gabriel (Jibril) to him, who called out saying:

"Allah has heard what your people said to you and how they responded to you. He has sent the Angel of the Mountains to you so that you may command him to do whatever you wish to them."

The Angel of the Mountains then called out, greeted the Prophet, and said:

"O Muhammad, that is so. What do you wish? If you wish, I can crush them between the two mountains (Al-Akhshabayn)—the two mountains surrounding Mecca."

But the Prophet ﷺ replied:

"Rather, I hope that Allah will bring forth from their descendants those who will worship Allah alone, associating no partners with Him."

The Aftermath and Divine Consolation
Such was the outcome of his journey to Al-Ta'if: harm and mockery. The Prophet ﷺ returned to Mecca, though the news of his setback in Al-Ta'if had already preceded him. At this point, the Prophet ﷺ began looking for an ally who could secure his entry into Mecca and guarantee his safety. He approached several leaders until Al-Mut'im bin Adi agreed to grant him protection.

In this atmosphere charged with anxiety for the future of the message—coupled with the loss of his protector in Mecca (his uncle Abu Talib) as well as the mockery and ill-treatment from outside Mecca (the people of Al-Ta'if)—Allah willed relief and reassurance for His Prophet through heavenly support.

This manifested in an earthly night journey from Mecca to Jerusalem (Bayt al-Maqdis), where the Prophet led the other Prophets in prayer. It was followed by a heavenly ascension (Al-Mi'raj) into the heavens to witness the greatest signs of his Lord. This journey renewed his absolute certainty in Allah's victory, serving as an assurance that Islam—which was facing such stubborn defiance and obstinacy from the people of Mecca and elsewhere—would inevitably rise in status, spread far and wide, and shine its light across the world.

          
          `
        }
      },
      ar: {
        translation: {
          webname: "النبي محمد (صلى الله عليه وسلم)",
          chapterlife: "السيرة النبوية",
          birth: "الميلاد",
          childhood: "الطفولة",
          youth: "الشباب",
          passing: "الوفاة",
          button: "English",
          resources: "المصادر",
          sitemp: "خريطة الموقع",
          about: "عن الموقع",
          cprt: "© 2026 النبي محمد (صلى الله عليه وسلم). جميع الحقوق محفوظة.",
          design: "تصميم مروه حسن",
          articleisra:`
          النبي ﷺ أصيب بصدمة كبيرة وهي وفاة زوجته السيدة خديجة وكانت له نعم الزوجة بوفائها ومساندتها وعطفها، وفي نفس الوقت فَقَدَ سندا آخر هو عمه أبو طالب الذي كان يحميه من أذى المشركين وبطشهم، وقد نجحت قريش في إيذاء النبي، ولم يكن هذا النجاح متيسرا لها من قبل في حياة أبي طالب. قال ابن إسحاق: «ثم إن خديجة بنت خويلد وأبا طالب هلكا في عام واحد فتتابعت على رسول الله ﷺ المصائب بهلك خديجة وكانت له وزير صدق على الإسلام يشكو إليها وبهلك عمه أبي طالب وكان له عضدا وحرزا في أمره وناصرا على قومه وذلك قبل هجرته إلى المدينة بثلاث سنين، فلما هلك أبو طالب، نالت قريش من رسول الله ﷺ من الأذى مالم تكن تطمع به في حياة أبي طالب حتى اعترضه سفيه من سفهاء قريش فنثر على رأسه ترابا».

وقد عبر النبي ﷺ عن حزنه لوفاة عمه أبي طالب الذي كان يمنع عنه أذى كثيرا «لما نثر ذلك السفيه على رأس رسول الله ﷺ ذلك التراب، دخل رسول الله ﷺ بيته والتراب على رأسه،
فقامت إليه إحدى بناته فجعلت تغسل عنه التراب وهي تبكي ورسول الله ﷺ يقول لها : لا تبكي يا بنية فإن الله مانع أباك قال : ويقول بعد ذلك : ما نالت منى قريش شيئا أكرهه حتى مات أبو طالب».

رحلة النبي إلى الطائف
لم يدخر النبي ﷺ جهدا إلا وبذله في سبيل نشر الإسلام ودعوته قومه للدين الجديد وقريش تزداد إيذاء وإرهاقا للمسلمين، وقد فكر النبي ﷺ في فتح ميدان جديد للدعوة خارج أسوار مكة؛ لعله يجد النصرة والتأييد، لذا نراه يتوجه إلى الطائف يدعو زعماءها وأهلها إلى الإسلام فوجد منهم الإعراض والإيذاء والسخرية.

التقى رسول الله ﷺ بسادة ثقيف في الطائف وكانوا ثلاثة هم : عبد ياليل بن عمرو، ومسعود بن عمرو، وحبيب بن عمرو، وقد جلس رسول الله ﷺ إليهم يعرض عليهم الإسلام ويشرح مبادئه ويطلب منهم النصرة والتأييد، وقد أجابه الثلاثة أسوأ إجابة وسخروا منه. يقول ابن إسحاق: «هو يمرط - ينزعه ويلقى به - ثياب الكعبة إن كان الله أرسلك وقال الآخر : أما وجد الله أحدا يرسله غيرك، وقال الثالث : والله لا أكلمك أبدا، لئن كنت رسولا من الله كما تقول لأنت أعظم خطرا من أن أرد عليك الكلام، ولئن كنت تكذب على الله، ما ينبغي لي أن أكلمك فقام رسول الله ﷺ من عندهم وقد يئس من خير ثقيف».

لم يكتف أهل الطائف برفض دعوة الإسلام، وإنما حرضوا صبيانهم وغلمانهم على قذف النبي بالحجارة حتى سال الدم الشريف من عقبيه، وفي هذا الجو الحزين من الكرب الشديد توجه الرسول إلى الله بالدعاء قائلا: «اللهم إليك أشكو ضعف قوتي وقلة حيلتي وهواني على الناس يا أرحم الراحمين، أنت رب المستضعفين وأنت ربي، إلى من تكلني؟ إلى بعيد يتجهمني أم إلى عدو ملكته أمري؟ إن لم يكن بك على غضب فلا أبالي، ولكن عافيتك هي أوسع لي، أعوذ بنور وجهك الذي أشرقت له الظلمات، وصلح عليه أمر الدنيا والآخرة من أن تنزل بي غضبك أو يحل على سخطك، لك العتبى حتى ترضى ولا حول ولا قوة إلا بك».
وسرعان ما استجاب الله لدعاء نبيه وأرسل إليه جبريل الذي ناداه قائلا :

إن الله قد سمع قول قومك لك وما ردوا عليك وقد بعث إليك ملك الجبال لتأمره بما شئت فيهم، فناداني ملك الجبال فسلم علي فقال يا محمد ذلك لك فما شئت؟ إن شئت أن أطبق عليهم الأخشبين - جبلان حول مكة - فقال النبي ﷺ بل أرجو أن يخرج الله من أصلابهم من يعبد الله لا يشرك به شيئا.

هكذا كانت نتيجة رحلته إلى الطائف، الإيذاء والسخرية، وعاد النبي ﷺ إلى مكة وأنباء إخفاقه في الطائف قد سبقته إلى مكة، وهنا بدأ النبي ﷺ يبحث عن حليف يمكنه من دخول مكة والاطمئنان على حياته، لذا عرض نفسه على أكثر من زعيم حتى أجابه إلى ذلك المطعم بن عدي.

في هذا الجو المشحون بالقلق على الدعوة ؛ مع فقد الناصر بمكة المتمثل في عمه أبي طالب فضلا عن السخرية والاستهزاء من خارج مكة متمثلا في أهل الطائف ومعاملتهم السيئة للنبي ﷺ، في هذا الجو المظلم أراد الله لنبيه التخفيف والاطمئنان لنصرة السماء، وقد تمثل ذلك في رحلة أرضية من مكة إلى بيت المقدس حيث صلى النبي بالأنبياء، ثم في رحلة سماوية حين عرج به إلى السماء ليرى من آيات ربه الكبرى وليزداد يقينا بنصرة الله له، وأن الإسلام الذي يلاقى فيه كل هذا العنت والعناد من أهل مكة وغيرها سيعلو شأنه وسوف ينتشر وتسطع أنواره في كل مكان.

          `
        }
      }
    },
    //Load saved language in i18n config
    lng: localStorage.getItem("lang") || "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });
}

function Appisra() {
  const { t,i18n } = useTranslation();
   const toggleLanguage = () => {
     const newLang = i18n.language === "en" ? "ar" : "en";
      i18n.changeLanguage(newLang);
      //Save language
      localStorage.setItem("lang", newLang);
      // RTL support
      document.body.dir = newLang === "ar" ? "rtl" : "ltr";
    };
  return (  
    <>
        <Mynavbar />
        <Container className="article-section my-4">
         <Card className="article-card shadow-sm border-0">
          <Card.Body>
           <article className="article-content">
            <p className="article-text">{t("articleisra")}</p>
           </article>
          </Card.Body>
         </Card>
        </Container>

        <Myfooter />
    </>
  );
}

export default Appisra;