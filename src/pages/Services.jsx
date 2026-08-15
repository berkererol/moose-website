import { Link } from 'react-router-dom';
import { useLang } from '../context/LangContext';
import useDocumentMeta from '../hooks/useDocumentMeta';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ctaBg from '../assets/images/cta-services.jpg';
import './Services.css';

const content = {
  tr: {
    header: {
      kicker: 'HİZMETLERİMİZ',
      title: 'Eğitim ve göçmenlik yolculuğunuzun her aşamasında, size özel bir strateji',
      sub: 'Öğrenci danışmanlığından göçmenlik stratejisine, seçkin üniversite başvurularından ileri süreç takibine — her hizmetimiz hukuki hassasiyet ve teknoloji disipliniyle yürütülür.',
    },
    services: [
      {
        title: 'Öğrenci Danışmanlığı', desc: "Kanada'daki üniversite başvuru sürecinde öğrenciler için akademik yol haritasına yönelik özel rehberlik.", bullets: [
          'Öğrencinin kişisel ilgi alanları, not ortalaması ve ders dışı faaliyetlerinin detaylı değerlendirilmesi',
          'Uygun okul ve programların belirlenmesi',
          'IELTS, TOEFL ve SAT sınavlarına hazırlık dersleri ve akademik tavsiyeler',
          'Üniversite başvurularının hazırlanması ve gönderilmesinde rehberlik',
        ]
      },
      {
        title: 'Göçmenlik Danışmanlığı', desc: 'Aileler ve bireyler için vize, oturum çözümleri stratejisi geliştirme ve planlama.', bullets: [
          'Uygunluk kriterlerine dayalı stratejik planlama',
          'Göçmenlik başvurularının ve gerekli belgelerin hazırlanmasında rehberlik',
          'Göçmenlik politikalarındaki son değişiklikler konusunda güncel bilgilendirme',
          'Bireysel duruma özel oturum/vize yol haritası',
        ]
      },
      {
        title: 'İleri Süreç Takibi & Mentorluk', desc: 'Öğrenciler, bireyler ve aileler için kabul sonrası sürekli takip ve danışmanlık hizmetleri.', bullets: [
          'Üniversitenin ilk yıllarında ders/bölüm seçimi ve diploma şartları konusunda mentorluk',
          'Yerleşme sürecinde çıkabilecek sorunlarda destek',
          'Üniversite veya devlet birimleriyle iletişimde destek',
          'Öğrenci vizesi ve akademik konularda sürekli danışmanlık',
        ]
      },
      {
        title: 'Seçkin Üniversite Kabul Stratejisi', desc: 'Ivy League, Oxbridge ve dünyanın önde gelen üniversiteleri için profil oluşturma ve burs stratejisi.', bullets: [
          'Akademik ve ders dışı profilin güçlendirilmesi',
          'Burs stratejisi ve başvuru zamanlaması',
          'Kabul komitelerinin beklentilerine yönelik başvuru metni danışmanlığı',
          'Rekabetçi programlar için kişiye özel yol haritası',
        ]
      },
      {
        title: 'Dil Okulları & Yaz Okulu', desc: 'Yurt dışında dil eğitimi ve yaz okulu programları için doğru kurum ve şehir seçimi.', bullets: [
          'Yurt dışında dil eğitimi için doğru ülke ve okul seçimi',
          'Yaz okulu programlarında kayıt ve konaklama süreci desteği',
          'Kısa süreli akademik deneyim planlaması',
          'Vize ve seyahat süreci konusunda bilgilendirme',
        ]
      },
      {
        title: 'Yurt Dışı Lise', desc: 'Lise öğrencileri için yurt dışında eğitim planlaması ve başvuru süreci desteği.', bullets: [
          'Öğrenci profiline uygun okul seçimi',
          'Başvuru sürecinde belge ve zamanlama desteği',
          'Vize ve konaklama sürecinde rehberlik',
          'Aileler için süreç boyunca düzenli bilgilendirme',
        ]
      },
    ],
    cta: { title: 'Size Uygun Stratejiyi Birlikte Belirleyelim', button: 'Ücretsiz Danışma Randevusu Al' },
    footer: {
      email: { display: 'info@mooseconsultants.com', href: 'info@mooseconsultants.com' },
      phone: { display: '+90 536 999 99 99 ', href: '+902123270000' },
      legal: 'Moose Education and Immigration Consulting; göçmenlik, vatandaşlık veya üniversite eğitim başvurularıyla ilgili herhangi bir sonuca dair garanti sunmaz ve sunduğunu iddia etmez. Bu sitedeki bilgiler yalnızca genel bilgilendirme amaçlıdır ve hukuki tavsiye niteliği taşımaz. Hukuki sorularınız ve göçmenlik özel durumunuzla ilgili olarak yetkili bir avukata veya lisanslı göçmenlik temsilcisine başvurmanız önerilir.',
      rights: 'Tüm hakları saklıdır.',
    },
  },
  en: {
    header: {
      kicker: 'OUR SERVICES',
      title: 'A tailored strategy at every stage of your education and immigration journey',
      sub: 'From student advisory to immigration strategy, from elite Canadian university applications to ongoing follow-up — every service is run with legal precision and technology-driven discipline.',
    },
    services: [
      {
        title: 'Student Advisory', desc: 'Dedicated guidance on the academic roadmap for university applications in Canada and beyond.', bullets: [
          "Detailed assessment of the student's interests, grades and extracurricular activities",
          'Identifying the right schools and programs',
          'IELTS, TOEFL and SAT preparation classes and academic advice',
          'Guidance on preparing and submitting university applications',
        ]
      },
      {
        title: 'Immigration Advisory', desc: 'Visa and residency strategy development and planning for families and individuals.', bullets: [
          'Strategic planning based on eligibility criteria',
          'Guidance on preparing immigration applications and required documents',
          'Up-to-date briefings on recent changes to immigration policy',
          'A residency/visa roadmap tailored to individual circumstances',
        ]
      },
      {
        title: 'Ongoing Follow-Up & Mentorship', desc: 'Continuous follow-up and advisory services for students, individuals and families after admission.', bullets: [
          'Mentorship on course/major selection and degree requirements in early university years',
          'Support with issues that arise while settling in',
          'Support in communication with universities or government bodies',
          'Ongoing advisory on student visa and academic matters',
        ]
      },
      {
        title: 'Canadian University Admissions Strategy', desc: "Profile building and scholarship strategy for the world's leading universities in Toronto, Ottawa, Montreal, Vancouver and more.", bullets: [
          'Strengthening the academic and extracurricular profile',
          'Scholarship strategy and application timing',
          'Advisory on application essays geared to admissions committees',
          'A tailored roadmap for highly competitive programs',
        ]
      },
      {
        title: 'Language & Summer Schools', desc: 'Choosing the right institution and city for language education and summer school programs abroad.', bullets: [
          'Choosing the right city and school for language education in Canada',
          'Support with enrollment and accommodation for summer school programs',
          'Planning short-term academic and extracurricular experiences',
          'Guidance on visa and travel logistics',
        ]
      },
      {
        title: 'Boarding School Abroad', desc: 'Education planning and application support for high school students studying abroad.', bullets: [
          "School selection suited to the student's profile",
          'Support with documents and timing during the application process',
          'Guidance on visa and accommodation',
          'Regular updates for families throughout the process',
        ]
      },
    ],
    cta: { title: 'Let’s Define the Right Strategy for You', button: 'Book a Free Consultation' },
    footer: {
      email: { display: 'info@mooseconsultants.com', href: 'info@mooseconsultants.com' },
      phone: { display: '+90 536 999 99 99 ', href: '+902123270000' },
      legal: 'Moose Education and Immigration Consulting does not provide, and does not claim to provide, any guarantee of outcome regarding immigration, citizenship or university education applications. Information on this site is for general informational purposes only and does not constitute legal advice. For legal questions and your specific immigration circumstances, please consult a licensed attorney or authorized immigration representative.',
      rights: 'All rights reserved.',
    },
  },
};

export default function Services() {
  const { lang } = useLang();
  const t = content[lang];

  useDocumentMeta({
    title: lang === 'tr' ? 'Hizmetlerimiz' : 'Services',
    description: 'Öğrenci danışmanlığı, göçmenlik danışmanlığı ve seçkin üniversite kabul stratejisi.',
    path: '/services',
  });

  return (
    <div className="page">
      <Header />

      <section className="section-divider services-header-section">
        <div className="container">
          <div className="kicker">{t.header.kicker}</div>
          <h1 className="services-title">{t.header.title}</h1>
          <p className="services-sub">{t.header.sub}</p>
        </div>
      </section>

      {t.services.map((svc) => (
        <section className="section-divider service-detail" key={svc.title}>
          <div className="container service-detail-grid">
            <div>
              <div className="service-detail-icon">🍁</div>
              <h2>{svc.title}</h2>
              <p>{svc.desc}</p>
            </div>
            <div className="service-bullets">
              {svc.bullets.map((b) => (
                <div className="service-bullet" key={b}>
                  <span className="bullet-dot" />
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="cta-banner services-cta-banner" style={{ backgroundImage: `url(${ctaBg})` }}>
        <div className="container cta-banner-inner">
          <div>
            <h2>{t.cta.title}</h2>
          </div>
          <Link to="/contact" className="btn btn-cta-light">
            {t.cta.button}
          </Link>
        </div>
      </section>

      <Footer logoHeight={196} email={t.footer.email} phone={t.footer.phone} legal={t.footer.legal} rights={t.footer.rights} />
    </div>
  );
}
