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
          articlechild:`
          The Prophet of Allah lived under the care of his grandfather, Abd al-Muttalib. The grandfather did everything he could to ease the pain of orphanhood from the heart of the young boy. He favored him over his other children, kept him close, and delighted in his presence. It was the custom of Abd al-Muttalib to sit on a special mat in the courtyard of the Kaaba, and no one would approach it except the Prophet ﷺ.

Ibn Ishaq says:

“A mat would be spread for Abd al-Muttalib in the shade of the Kaaba. His sons would sit around it until he came out to it, and none of his sons would sit upon it out of respect for him. But the Messenger of Allah ﷺ, while still a boy, would come and sit on it. His uncles would take him away from it, but when Abd al-Muttalib saw this, he would say: ‘Leave my son alone, for by Allah, he shall have a great future.’ Then he would seat him beside him on the mat, stroke his back with his hand, and be pleased with whatever he saw him do.”

Abd al-Muttalib’s care was not limited to honoring the Prophet ﷺ in his gatherings; it also extended to food and drink. He would not eat unless he said: “Bring me my son,” and the boy would be brought to share his meals and drinks with him.

Naturally, Abd al-Muttalib’s behavior stemmed from his awareness of the loneliness of this child after losing both parents. He wanted to surround him with love and compensate for the tenderness he had lost. At the same time, the increasing care and attention shown to the Prophet ﷺ elevated his status and deepened the love people felt for him among his family as well as among the leaders and nobles of Quraysh.

However, the Prophet ﷺ soon lost the affection of his grandfather when Abd al-Muttalib died in the eighth year after the Prophet’s birth. Afterward, his uncle Abu Talib took him into his care, despite not being wealthy. One reason may have been that Abdullah, the Prophet’s father, was Abu Talib’s full brother — sharing both father and mother. In addition, Abd al-Muttalib had entrusted Abu Talib with caring for and protecting the Prophet ﷺ.

The Prophet ﷺ also accompanied his uncle in trade. When he reached the age of twelve, he joined Abu Talib on a trading journey to Syria. They arrived at Busra, one of the important commercial centers in Syria. Some historical narrations mention that there was a monk in Busra named Bahira. When he met Abu Talib and his nephew Muhammad, he informed Abu Talib that his nephew would one day achieve great significance. He urged him to protect the boy and quickly return with him out of fear that enemies might seek to harm him.

Ibn Ishaq referred to the conversation between the monk Bahira and the Messenger of Allah ﷺ:

“Bahira approached him and said: ‘Young man, I ask you by al-Lat and al-‘Uzza to tell me what I ask you about.’ Bahira only said this because he had heard the people swearing by them. They claimed that the Messenger of Allah ﷺ replied:

‘Do not ask me by al-Lat and al-‘Uzza, for by Allah, I have never hated anything more than I hate them.’

So Bahira said:

‘Then, by Allah, tell me what I ask you about.’

The Prophet replied:

‘Ask me whatever you wish.’

Bahira then began asking him about matters concerning his condition, his people, his appearance, and his affairs. The Messenger of Allah ﷺ answered him, and his answers matched what Bahira knew from the descriptions he possessed.

Then Bahira looked at his back and saw the Seal of Prophethood between his shoulders, exactly where he expected it to be according to the descriptions he had.

When he finished, he turned to Abu Talib and asked:

‘What relation is this boy to you?’

Abu Talib replied:

‘He is my son.’

Bahira said:

‘He is not your son. The father of this boy should not be alive.’

Abu Talib answered:

‘He is my nephew.’

Bahira asked:

‘What happened to his father?’

Abu Talib said:

‘He died while the boy’s mother was pregnant with him.’

Bahira said:

‘You have spoken the truth. Take your nephew back to his homeland and beware of the Jews concerning him. By Allah, if they see him and recognize in him what I have recognized, they may wish him harm. Your nephew is destined for a great future, so take him quickly back to his country.’”

When the Prophet ﷺ reached the age of fifteen — and some say twenty — he witnessed and participated in the War of al-Fijar. The war took place between Quraysh and their allies from Kinana on one side, and Qays ‘Aylan on the other.

The conflict erupted after one of the sons of the Qays tribe granted protection to a caravan belonging to al-Nu‘man. A man from Kinana became angered by this and attacked the caravan during one of the sacred months, which led to war between the two sides. Quraysh supported Kinana. The conflict was called the “War of al-Fijar” because the fighting occurred during the sacred months, in which warfare was forbidden.

The role of the Prophet ﷺ in the war was to prepare arrows for the archers and return enemy arrows to them.

Ibn Ishaq says:

“The Messenger of Allah ﷺ witnessed some of their battle days, and his uncles took him out with them. The Messenger of Allah ﷺ said:

‘I used to hand arrows to my uncles — meaning I would return the enemy’s arrows to them when they shot them.’”
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
          articlechild:`
          
عاش النبي الله في كفالة جده عبد المطلب، وقد بذل الجد كل جهده في تخفيف ألم اليتم عن نفس الصبي الصغير، فكان يفضله على غيره من أبنائه ويقربه إليه ويفرح بوجوده وكان من عادة عبد المطلب أن يجلس على فراش في فناء الكعبة فلا يقربه أحد إلا النبي صلى الله عليه وسلم يقول ابن إسحاق : وكان يوضع لعبد المطلب فراش فى ظل الكعبة، فكان بنوه يجلسون حول فراشه ذلك حتى يخرج لا إله إلا الله إليه، لا يجلس عليه أحد من بنيه إجلالا ،له قال فكان رسول الله صلى الله عليه وسلم يأتي وهو غلام حتى يجلس عليه فيأخذه أعمامه ليؤخروه عنه، فيقول عبد المطلب إذا رأى ذلك منهم : دعوا ابنى فو الله إن له لشأنا، ثم يجلسـه معـه على الفراش
ويمسح ظهره بیده ويسره ما يراه يصنع .

ولم يكن الاهتمام من عبد المطلب مقصوراً على تقريبه النبي ﷺ إليه في مجلسه بل تعداه إلى المأكل والمشرب فكان لا يأكل طعاماً إلا قال: عليّ بابني فيؤتى به إليه ليشاركه الطعام والشراب، وبطبيعة الحال كان الدافع إلى هذا المسلك من جانب عبد المطلب إحساسه بوحدة هذا الصبي بعد أن فقد والديه، فأراد أن يحوطه بحبه ويعوضه الحنان المفقود، ومن ناحية أخرى كانت الرعاية والاهتمام المتزايد للنبي ﷺ عاملاً من عوامل زيادة مكانته ومحبته في قلوب أسرته فضلاً عن زعماء قريش ورجالاتها.

إلا أن النبي ما لبث أن فقد عطف الجد وذلك بوفاة الجد في العام الثامن من مولد النبي ﷺ، وقد كفله عمه أبو طالب برغم أنه لم يكن غنياً، وربما كان السبب في ذلك أن عبد الله والد النبي كان شقيقاً لأبي طالب فهما أخوان لأب وأم يضاف إلى هذا وصية عبد المطلب لابنه أبي طالب بالاهتمام والعناية بالنبي ﷺ.

وقد شارك النبي ﷺ عمه في أعماله التجارية، ولما بلغ الثانية عشرة من عمره رافقه في رحلة تجارية إلى الشام ووصلا إلى بصرى، وكانت من المراكز التجارية الهامة في الشام، وتشير بعض الروايات التاريخية أنه كان ببصرى راهب اسمه بحيرا، وحين التقى بأبي طالب وابن أخيه محمد أخبر أبا طالب بأن ابن أخيه سوف يكون له شأن كبير ورجاه أن يحافظ عليه ويحميه ويعود به مسرعاً خوفاً عليه من عدو يترصده. وقد أشار ابن إسحاق إلى الحوار الذي دار بين الراهب بحيرى وبين رسول الله ﷺ: «قام إليه بحيرى فقال له: يا غلام: أسألك بحق اللات والعزى ألا ما أخبرتني عما أسألك عنه، وإنما قال له بحيرى ذلك لأنه سمع قومه يحلفون بهما، فزعموا أن رسول الله ﷺ قال له: لا تسألني باللات والعزى فوالله ما أبغضت شيئاً قط بغضهما، فقال له بحيرى: فبالله ألا ما أخبرتني عما أسألك عنه، فقال له: سلني عما بدا لك، فجعل يسأله عن أشياء من حاله في قومه وهيئته وأموره، فجعل رسول الله ﷺ يخبره فيوافق ذلك ما عند بحيرى من صفته، ثم نظر إلى ظهره فرأى خاتم النبوة بين كتفيه على موضعه من صفته التي عنده.
فلما فرغ أقبل على عمه أبي طالب فقال له: ما هذا الغلام منك؟ قال: ابني قال له بحيرى: ما هو ابنك وما ينبغي لهذا الغلام أن يكون أبوه حيا قال: فإنه ابن أخي، قال: فما فعل أبوه؟ قال: مات وأمه حبلى به، قال: صدقت فارجع بابن أخيك إلى بلده واحذر عليه اليهود فوالله لئن رأوه وعرفوا منه ما عرفت ليبغنه شرا، فإنه كائن لابن أخيك هذا شأن عظيم فأسرع به إلى بلاده».

وحين بلغ النبي ﷺ الخامسة عشرة من عمره وقيل عشرين شهد حرب الفجار واشترك فيها، وكانت الحرب بين قريش ومن معها من كنانة وبين قيس عيلان، وقد نشبت الحرب نتيجة أن أحد أبناء قبيلة قيس أجار قافلة للنعمان فغضب من ذلك أحد الكنانيين واعتدى على القافلة في الشهر الحرام مما أدى إلى نشوب الحرب بينهما وناصرت قريش كنانة، وقد سميت حرب الفجار نتيجة وقوع القتال في الشهر الحرام وكان دور النبي ﷺ هو تجهيز السهام للرماة والرد على العدو. يقول ابن إسحاق: «وشهد رسول الله ﷺ بعض أيامهم، وأخرجه أعمامه معهم، وقال رسول الله ﷺ: كنت أنبل على أعمامي أي أرد عليهم نبل عدوهم إذا رموهم بها.
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

function Appchi() {
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
            <p className="article-text">{t('articlechild')}</p>
           </article>
          </Card.Body>
         </Card>
        </Container>

        <Myfooter />
    </>
  );
}

export default Appchi;