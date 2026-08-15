import { Link } from 'react-router-dom';
import { useLang } from '../context/LangContext';
import useDocumentMeta from '../hooks/useDocumentMeta';
import Header from '../components/Header';
import Footer from '../components/Footer';
import founderAsli from '../assets/images/founder-asli.jpg';
import founderBerker from '../assets/images/founder-berker.jpg';
import ctaBg from '../assets/images/cta-about.jpg';
import './About.css';

const content = {
  tr: {
    founders: {
      kicker: 'KURUCU ORTAKLAR',
      title: 'Hukuk, mimarlık ve yazılım alanındaki deneyimlerini bir araya getiren bir ekip.',
      items: [
        {
          photo: founderAsli,
          name: 'Aslı Deniz Eke',
          role: 'Kurucu Ortak',
          linkedin: 'https://www.linkedin.com/in/asli-deniz-eke-472b719a/',
          bio: "Aslı, McGill Üniversitesi ve Toronto Üniversitesi Hukuk Fakültesi'nde (University of Toronto Faculty of Law) Juris Doctor eğitimini tamamladı ve dört sene boyunca Toronto’da savcılık ve özel sektörde avukatlık yaptı."
        },
        {
          photo: founderBerker,
          name: 'Berker Erol',
          role: 'Kurucu Ortak',
          linkedin: 'https://www.linkedin.com/in/berkererol/',
          bio: "Berker, Galatasaray Lisesi’ni takiben McGill Üniversitesi'nde mimarlık eğitimini tamamladı. Ardından, Lighthouse Labs’de yazılım geliştirme eğitimi alarak kariyerini yazılım alanına taşıdı; son yedi yıldır Montreal ve Brighton’da uluslararası şirketlerde yazılım mühendisi olarak çalıştı."
        },
      ],
    },
    values: {
      kicker: 'NASIL ÇALIŞIRIZ',
      title: 'Süreci yönlendiren dört ilke',
      items: [
        { title: 'Analitik Yaklaşım', desc: 'Her kararı seçenekleri karşılaştırarak, veriye dayalı şekilde alırız.' },
        { title: 'Detaycı Süreç Yönetimi', desc: 'İsimden bir belgenin son ayrıntısına kadar her adımı doğrularız.' },
        { title: 'Pragmatik Strateji', desc: 'Teoride iyi görünenden çok, gerçek hayatta işe yarayanı önceliklendiririz.' },
        { title: 'Şeffaflık', desc: 'Sürecin her aşamasında nerede olduğunuzu net şekilde bilirsiniz.' },
      ],
    },
    cta: { title: 'Ekibimizle Tanışın', sub: 'İlk görüşme ücretsizdir.', button: 'Ücretsiz Danışma Randevusu Al' },
    footer: {
      email: { display: 'info@mapleleafconsulting.com', href: 'info@atlanticedu.com' },
      phone: { display: '+90 212 327 00 00', href: '+902123270000' },
      legal: 'Maple Leaf Education and Immigration Consulting; göçmenlik, vatandaşlık veya üniversite eğitim başvurularıyla ilgili herhangi bir sonuca dair garanti sunmaz ve sunduğunu iddia etmez. Bu sitedeki bilgiler yalnızca genel bilgilendirme amaçlıdır ve hukuki tavsiye niteliği taşımaz. Hukuki sorularınız ve göçmenlik özel durumunuzla ilgili olarak yetkili bir avukata veya lisanslı göçmenlik temsilcisine başvurmanız önerilir.',
      rights: 'Tüm hakları saklıdır.',
    },
  },
  en: {
    founders: {
      kicker: 'FOUNDING PARTNERS',
      title: 'A team bringing together experience in law, architecture and software.',
      items: [
        {
          photo: founderAsli,
          name: 'Aslı Deniz Eke',
          role: 'Founding Partner',
          linkedin: 'https://www.linkedin.com/in/asli-deniz-eke-472b719a/',
          bio: "After graduating with honors from McGill University with a degree in Political Science and Economics, Aslı completed her Juris Doctor at the University of Toronto Faculty of Law. She then spent four years practicing law in Toronto, working both in government and in the private sector."
        },
        {
          photo: founderBerker,
          name: 'Berker Erol',
          role: 'Founding Partner',
          linkedin: 'https://www.linkedin.com/in/berkererol/',
          bio: "After graduating from Galatasaray High School, Berker studied Architecture at McGill University and began his career as an architect. He later trained in software development at Lighthouse Labs and transitioned into IT, working as a software engineer for international companies in Montreal (CA) and Brighton (UK) for the past seven years."
        },
      ],
    },
    values: {
      kicker: 'HOW WE WORK',
      title: 'Four principles that guide the process',
      items: [
        { title: 'Analytical Approach', desc: 'We make every decision by comparing options and relying on data.' },
        { title: 'Meticulous Process Management', desc: 'We verify every step, down to the smallest detail of a document.' },
        { title: 'Pragmatic Strategy', desc: 'We prioritize what actually works in practice over what merely sounds good in theory.' },
        { title: 'Transparency', desc: 'You always know exactly where you stand in the process.' },
      ],
    },
    cta: { title: 'Meet Our Team', sub: 'The first consultation is free.', button: 'Book a Free Consultation' },
    footer: {
      email: { display: 'info@mapleleafconsulting.com', href: 'info@atlanticedu.com' },
      phone: { display: '+90 212 327 00 00', href: '+902123270000' },
      legal: 'Maple Leaf Education and Immigration Consulting does not provide, and does not claim to provide, any guarantee of outcome regarding immigration, citizenship or university education applications. Information on this site is for general informational purposes only and does not constitute legal advice. For legal questions and your specific immigration circumstances, please consult a licensed attorney or authorized immigration representative.',
      rights: 'All rights reserved.',
    },
  },
};

export default function About() {
  const { lang } = useLang();
  const t = content[lang];

  useDocumentMeta({
    title: lang === 'tr' ? 'Hakkımızda' : 'About',
    description: 'Hukuk ve teknolojiyi bir araya getiren kurucu ortaklarımızı tanıyın.',
    path: '/about',
  });

  return (
    <div className="page">
      <Header />

      <section className="section-divider founders-section">
        <div className="container">
          <div className="kicker">{t.founders.kicker}</div>
          <h2 className="section-title">{t.founders.title}</h2>
          <div className="founders-grid">
            {t.founders.items.map((f) => (
              <div className="founder-card" key={f.name}>
                <div className="founder-photo" style={{ backgroundImage: `url(${f.photo})` }} />
                <div>
                  <h3>{f.name}</h3>
                  <div className="founder-role">{f.role}</div>
                  <a href={f.linkedin} target="_blank" rel="noreferrer" className="founder-linkedin">
                    LinkedIn →
                  </a>
                  <p className="founder-bio">{f.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-divider values-section">
        <div className="container">
          <div className="kicker">{t.values.kicker}</div>
          <h2 className="section-title">{t.values.title}</h2>
          <div className="values-grid">
            {t.values.items.map((v) => (
              <div className="rail-item" key={v.title}>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner about-cta-banner" style={{ backgroundImage: `url(${ctaBg})` }}>
        <div className="container cta-banner-inner">
          <div>
            <h2>{t.cta.title}</h2>
            <p>{t.cta.sub}</p>
          </div>
          <Link to="/contact" className="btn btn-cta-light">
            {t.cta.button}
          </Link>
        </div>
      </section>

      <Footer logoSquare email={t.footer.email} phone={t.footer.phone} legal={t.footer.legal} rights={t.footer.rights} />
    </div>
  );
}
