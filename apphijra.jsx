import React from 'react';
import i18n from 'i18next';
import Mynavbar from './navbar';
import Myfooter from './footer';
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
          articlehijra:`
          Quraysh realized the danger threatening them as a result of the people of Yathrib pledging allegiance to the Prophet (peace be upon him). He now had a force to rely on and seek support from. They also realized the consequences of their own sons migrating to Medina after the Prophet permitted them to do so, and what this would entail in terms of forming a powerful front that included the Muslim sons of Mecca alongside the Muslims of Medina. They feared that the Muslims—both Muhajirun (migrants) and Ansar (helpers)—might launch attacks from their base in Yathrib against Mecca, eradicating the religion of their fathers and forefathers. Furthermore, they posed a threat to Mecca's trade routes heading toward the Levant, and trade was the very lifeblood of Quraysh.

These dangers became glaringly obvious to the leaders of Quraysh. Therefore, the leaders called for a decisive meeting to reach a definitive stance regarding the bearer of the Message. References point to the dialogue that took place among the leaders in Dar al-Nadwa (the assembly house), including what Ibn Ishaq narrated:

"Some of them said to one another: 'You have seen what this man's affair has come to. By God, we do not feel safe from him suddenly attacking us alongside those from outside our people who follow him. So, agree upon a decisive opinion regarding him.' He [Ibn Ishaq] said: They consulted one another, and then one of them said: 'Imprison him in iron shackles and lock the door upon him. Then, lie in wait for him to suffer the same fate as the poets who came before him and those who passed away, until death overtakes him just as it overtook them.'

The Najdi Sheikh (The Old Man of Najd) said: 'No, by God, this is not a sound opinion for you. By God, if you imprison him as you say, his matter will surely escape from behind the door you locked to reach his companions. They would then almost certainly launch an assault on you, wrench him from your hands, and outnumber you until they overpower you. This is not a sound opinion for you, so look for another.'

They consulted further, and then another one of them said: 'We banish him from our midst and exile him from our land. Once he is expelled from us, by God, we do not care where he goes or where he lands. As long as he is gone from us and we are rid of him, we can reform our affairs and restore our unity as it was before.'

The Najdi Sheikh replied: 'No, by God, this is not a sound opinion for you. Have you not seen the beauty of his speech, the sweetness of his articulation, and how he wins over the hearts of men with what he brings? By God, if you do this, you cannot be certain that he won't settle among an Arab tribe and win them over with his words and speech until they follow him. He would then march them toward you to trample you in your own lands, take your power from your hands, and do with you as he pleases. Devise an opinion other than this.'

He said: Then Abu Jahl ibn Hisham spoke: 'By God, I have an opinion regarding him that I see none of you have thought of yet.' They asked: 'And what is it, O Abu al-Hakam?' He said: 'I propose that we take from every tribe a young, strong, and well-born youth of intermediate status among us. Then, we give each of these youths a sharp sword. They shall then march to him and strike him simultaneously like a single man, killing him so we can be rid of him. If they do that, his blood will be distributed among all the tribes, and the Banu Abd Manaf will not be able to wage war against all their people. Thus, they will accept blood money (Diyyah) from us, and we will pay it to them.'

He said: Then the Najdi Sheikh exclaimed: 'The correct opinion is what this man has said; there is no other opinion but his.' With that, the people dispersed, fully resolved to execute it."

From the preceding text, we can deduce the extent of the anxiety Quraysh suffered because of the new religion, and how they reviewed every single opinion in order to eliminate the bearer of the Message. Ultimately, they settled on killing him, ensuring that youths from all tribes participated in the murder. By doing so, the Banu Hashim would be unable to fight all the tribes combined, leaving them with no choice but to accept the blood money, thereby relieving Quraysh from the burden of the new Da'wah (Message).

However, this meticulously orchestrated plot did not succeed because God protected His Prophet and His Message. Divine revelation descended, informing the Prophet (peace be upon him) of what Quraysh had plotted and commanding him to migrate to Yathrib. The Prophet (peace be upon him) was accompanied by Abu Bakr on the journey from Mecca to Medina. God's care and guardianship surrounded them, protecting them from the perils of the road and the traps laid by those lying in wait throughout the journey, until they arrived safely on Monday, the eighth of Rabi' al-Awwal, fifty-three years after his birth.


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
          articlehijra:`
          
          أدركت قريش الخطر الذي يهددها نتيجة مبايعة أهل يثرب للنبي ﷺ، فقد صارت له قوة يركن إليها ويستعين بها، كما أدركت النتائج المترتبة على هجرة أبنائها إلى المدينة وذلك بعد أن سمح لهم النبي بالهجرة وما يترتب على ذلك من تكوين جبهة قوية تضم أبناء مكة المسلمين بالإضافة إلى مسلمي المدينة، وأن المسلمين بنوعيهم مهاجرين وأنصارا، ربما انطلقوا من قاعدتهم بيثرب للإغارة على مكة والقضاء على دين الآباء والأجداد، فضلا عن أنهم يشكلون خطرا على تجارة مكة المتجهة إلى الشام؛ والتجارة هي عصب الحياة لقريش.

هذه المخاطر بدت واضحة أمام زعماء قريش، لذا دعا الزعماء لعقد اجتماع حاسم يصلون فيه إلى رأي قاطع بشأن صاحب الدعوة، وقد أشارت المراجع إلى الحوار الذي دار بين الزعماء في دار الندوة، ومن ذلك ما ذكره ابن إسحاق:

«فقال بعضهم لبعض: إن هذا الرجل قد كان من أمره ما قد رأيتم، فإنا والله ما نأمنه على الوثوب علينا فيمن اتبعه من غيرنا، فأجمعوا فيه رأيا. قال: فتشاوروا ثم قال قائل منهم: احبسوه
في الحديد وأغلقوا عليه بابا ثم تربصوا به ما أصاب أشباهه من الشعراء الذين كانوا قبله ومن مضى منهم من هذا الموت حتى يصيبه ما أصابهم .

فقال الشيخ النجدي : لا والله ، ما هذا لكم برأي والله لئن حبستموه كما تقولون ليخرجن أمره من وراء الباب الذي أغلقتم دونه إلى أصحابه فلأوشكوا أن يثبوا عليكم فينتزعوه من أيديكم ثم يكاثروكم به حتى يغلبوكم على أمركم ما هذا لكم برأي فانظروا في غيره .

فتشاوروا ثم قال قائل منهم : نخرجه من بين أظهرنا فننفيه من بلادنا فإذا أخرج عنا فوالله ما نبالي أين ذهب ولا حيث وقع إذا غاب عنا وفرغنا منه فأصلحنا أمرنا وألفتنا كما كانت .

فقال الشيخ النجدي : لا والله ما هذا لكم برأي . . ألم تروا حسن حديثه وحلاوة منطقه وغلبته على قلوب الرجال بما يأتي به، والله لو فعلتم ما أمنتم أن يحل على حي من العرب فيغلب عليهم بذلك من قوله وحديثه حتى يتابعوه عليه ثم يسير بهم إليكم حتى يطأكم بهم في بلادكم فيأخذ أمركم من أيديكم، ثم يفعل بكم ما أراد، دبروا فيه رأيا غير هذا .

قال : فقال أبو جهل بن هشام : والله إن لي فيه لرأيا ما أراكم وقعتم عليه بعد قالوا : وما هو يا أبا الحكم؟ قال : أرى أن نأخذ من كل قبيلة فتى شابا جلدا نسيبا وسطا فينا، ثم نعطى كل فتى منهم سيفا صارما ثم يعمدوا إليه فيضربوه بها ضربة رجل واحد فيقتلوه فنستريح منه، فإنهم إذا فعلوا ذلك تفرق دمه في القبائل جميعا، فلم يقدر بنو عبد مناف على حرب قومهم جميعا فرضوا منا بالعقل - الدية - فعقلناه لهم .

قال : فقال الشيخ النجدي : «القول ما قال الرجل، هذا الرأى لا رأى غيره. فتفرق القوم على ذلك وهم مجمعون له».
من النص السابق نستنبط مدى ما تعانيه قريش من الدين الجديد، وكيف أنها استعرضت كل الآراء في سبيل القضاء على صاحب الدعوة، وأنها استقرت في النهاية على قتله وأن يشترك في القتل أبناء القبائل؛ وبذلك لا يستطيع بنو هاشم محاربة كل القبائل ومن ثم يقبلون الدية وتستريح قريش من عناء الدعوة الجديدة.

هذه الخطة المحكمة لم تنجح لأن الله حفظ نبيه ودعوته وجاء الوحي وأخبر النبي ﷺ بما دبرته قريش ويأمره بالهجرة إلى يثرب، وصحب النبي ﷺ أبا بكر في الرحلة من مكة إلى المدينة، ورعاية الله وعنايته تحوطهما من أخطار الطريق وما يتربص بهما خلال الرحلة حتى وصلا سالمين يوم الإثنين الثامن من شهر ربيع الأول سنة ثلاث وخمسين مضت من مولده.


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

function Apphijra() {
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
            <p className="article-text">{t("articlehijra")}</p>
           </article>
          </Card.Body>
         </Card>
        </Container>

        <Myfooter />
    </>
  );
}

export default Apphijra;