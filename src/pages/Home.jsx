import { Link } from 'react-router-dom';
import { useLang } from '../context/LangContext';
import useDocumentMeta from '../hooks/useDocumentMeta';
import Header from '../components/Header';
import Footer from '../components/Footer';
import heroImg from '../assets/images/hero.png';
import gallery1 from '../assets/images/gallery-1.webp';
import gallery2 from '../assets/images/gallery-2.webp';
import gallery3 from '../assets/images/gallery-3.webp';
import ctaBg from '../assets/images/cta-home.jpg';
import './Home.css';

const content = {
  tr: {
    hero: {
      kicker: 'YURTDIȘI EĞİTİM DANIŞMANLIĞI + AKADEMİK SINAV HAZIRLIĞI + GÖÇMENLİK',
      title: 'Yurtdışı Eğitim ve Göçmenlik Yolculuğunuzda Çözüm Ortağınız.',
      sub: 'Yurtdışı eğitim ve göçmenlik konusunda ögrenciler, çalışanlar ve aileler için bire bir eğitim ve rehberlik hizmeti veren deneyimli bir ekibiz.',
      ctaPrimary: 'Ücretsiz Danışma Randevusu Al',
      ctaSecondary: 'Hizmetlerimizi İnceleyin',
    },
    why: {
      kicker: 'NEDEN MAPLE LEAF',
      title: 'İhtiyaçlarınızı çok iyi anlıyor ve hedefleriniz için birlikte çalışıyoruz.',
      items: [
        { n: '01', title: 'Empati', desc: "Kanada'da okuduk, çalıştık ve göçmenlik sürecini tamamladık — teoride değil, pratikte geçtiğiniz zorlu süreci biliyoruz ve size bu konuda tam destek oluyoruz." },
        { n: '02', title: 'Eġitim Hassasiyeti', desc: 'McGill Üniversitesi ve Toronto Üniversitesi gibi eğitim akademilerinde edindiġimiz deneyimlerimiz ile akademik hedeflerinizi birlikte planlıyoruz.' },
        { n: '03', title: 'Şeffaf ve Yapılandırılmış Süreç', desc: 'Her adımı net bir yol haritasıyla takip ediyor, sürecin tamamında yanınızda oluyoruz. Alternatifleri doġru bir metodoloji ile değerlendirerek sizin için en verimli sonucu elde ediyoruz.' },
      ],
    },
    services: {
      kicker: 'HİZMETLERİMİZ',
      title: 'Yolculuğunuzun her aşamasında yanınızdayız',
      viewAll: 'Tüm Hizmetleri Görüntüle',
      items: [
        { title: 'Öğrenci Danışmanlığı', desc: 'Üniversite başvuru sürecinde akademik yol haritası, okul ve program seçimi, IELTS, TOEFL ve SAT gibi akademik sınavlar için hazırlık dersleri ve programlar.' },
        { title: 'Göçmenlik Danışmanlığı', desc: 'Vize ve oturum stratejisi, uygunluk değerlendirmesi, başvuru ve belge hazırlığında rehberlik.' },
        { title: 'İleri Süreç Takibi & Mentorluk', desc: 'Kabul sonrası ders/bölüm seçimi, diploma şartları ve kariyer rehberliği.' },
        { title: 'Kanada Üniversite Kabul Stratejisi', desc: "Toronto, Ottawa, Montréal ve Vancouver'da bulunan ve dünyanın önde gelen üniversiteleri için profil oluşturma ve burs stratejisi." },
        { title: 'Dil Okulları & Yaz Okulu', desc: 'Yurt dışında dil eğitimi ve yaz okulu programları için doğru kurum ve şehir seçimi. Kalacak yer ve kısa dönem öğrenci vize başvurularında rehberlik.' },
        { title: "Kanada Lise Eğitimi', desc: 'Lise öğrencileri için Kanada'da eğitim planlaması ve başvuru süreci desteği. Kalacak yer ve uzun dönem öğrenci vize başvurularında rehberlik." },
      ],
    },
    how: {
      kicker: 'NASIL ÇALIŞIYORUZ',
      title: 'Dört adımda net bir yol haritası',
      steps: [
        { n: '1', title: 'Danışmanlık', desc: 'İlk görüşmede hedeflerinizi, önceliklerinizi ve zaman çizelgenizi birlikte netleştiriyoruz.' },
        { n: '2', title: 'Profil Değerlendirmesi', desc: 'Akademik geçmiş, dil yeterliliği ve göçmenlik kriterlerini detaylı olarak inceliyoruz. Danışanlarımızın ihtiyaçlarına göre eğitim programları oluşturuyoruz.' },
        { n: '3', title: 'Strateji ve Uygulamalar', desc: 'Size özel bir başvuru stratejisi oluşturuyor, belgelerin hazırlanmasında adım adım eşlik ediyoruz. Birebir eğitim, yaz okulu planlaması ve sınav tarihlerine göre akademik çalışma takvimi oluşturmanın yanı sıra, tüm başvuru sürecini ve sonuçları takip ettiğimiz kapsamlı bir sistem sunuyoruz.' },
        { n: '4', title: 'Kabul ve Vize Desteği', desc: 'Eğitim ya da göçmenlik başvurularınız sonrası vize, oturum ve vatandaşlık sürecinde ve yerleşim sonrasında da fiziksel olarak yanınızda oluyoruz.' },
      ],
    },
    testimonials: {
      kicker: 'ÖĞRENCİ VE AİLE YORUMLARI',
      title: 'Yolculuğa çıkanlar ne diyor',
      items: [
        { quote: 'Süreç boyunca her sorumuza net ve dürüst cevaplar aldık. Başvuru stratejimiz gerçekten bize özel hazırlandı.', name: 'Deniz K.', meta: 'Toronto Üniversitesi — Kabul 2026' },
        { quote: 'Göçmenlik süreciyle ilgili endişelerimizi baştan sona takip ettiler; hiçbir aşamada tek başımıza kalmadık.', name: 'Ece & Aile', meta: 'Ontario — Oturum Başvurusu' },
        { quote: 'Hem hukuki hem teknik detaylara hakim bir ekiple çalışmak güven verdi. Kesinlikle tavsiye ederim.', name: 'Mert Y.', meta: 'McGill Üniversitesi — Kabul 2026' },
      ],
    },
    cta: { title: 'Yolculuğunuza Bugün Başlayın', sub: 'Hedeflerinizi birlikte değerlendirelim.', button: 'Ücretsiz Danışma Randevusu Al' },
    footer: {
      email: { display: 'info@mapleconsulting.com', href: 'info@atlanticedu.com' },
      phone: { display: '+90 536 999 99 99 ', href: '+902123270000' },
      legal: 'Maple Leaf Education and Immigration Consulting; göçmenlik, vatandaşlık veya üniversite eğitim başvurularıyla ilgili herhangi bir sonuca dair garanti sunmaz ve sunduğunu iddia etmez. Bu sitedeki bilgiler yalnızca genel bilgilendirme amaçlıdır ve hukuki tavsiye niteliği taşımaz. Hukuki sorularınız ve göçmenlik özel durumunuzla ilgili olarak yetkili bir avukata veya lisanslı göçmenlik temsilcisine başvurmanız önerilir.',
      rights: 'Tüm hakları saklıdır.',
    },
  },
  en: {
    hero: {
      kicker: 'CANADA EDUCATION ADVISORY + ACADEMIC TEST PREP + IMMIGRATION',
      title: 'Your Partner in Canadian Education and Immigration Planning',
      sub: 'We provide personalized education and immigration guidance to students, professionals, and families pursuing opportunities in Canada.', ctaPrimary: 'Book a Free Consultation',
      ctaSecondary: 'Explore Our Services',
    },
    why: {
      kicker: 'WHY MAPLE LEAF',
      title: 'We understand your goals. We help you get there faster.',
      items: [
        { n: '01', title: 'Empathy', desc: 'Our founders studied, worked and went through the immigration process in Canada themselves — we know first-hand how demanding this journey is, and give you our full support through it.' },
        { n: '02', title: 'Educational Precision', desc: "Drawing on our own experience at institutions like McGill University and the University of Toronto, we plan your academic goals together with you." },
        { n: '03', title: 'A Transparent, Structured Process', desc: 'We track every step with a clear roadmap and stay with you throughout. We weigh every alternative with a sound methodology to get you the most effective result.' },
      ],
    },
    services: {
      kicker: 'OUR SERVICES',
      title: 'With you at every stage of your journey',
      viewAll: 'View All Services',
      items: [
        {
          title: 'Student Advisory',
          desc: 'Personalized academic planning for university applications, school and program selection, and preparation for IELTS, TOEFL, SAT, and other standardized exams.',
        },
        {
          title: 'Canadian University and College Admissions',
          desc: 'Personalized application strategy and guidance for leading Canadian universities and colleges, from program selection and profile building to applications and scholarship opportunities.',
        },
        {
          title: 'Immigration Advisory',
          desc: 'Personalized visa and immigration strategy, eligibility assessment, and end-to-end guidance with applications and documentation.',
        },
        {
          title: 'Ongoing Guidance & Mentorship',
          desc: 'Continued support after admission, including course and major selection, degree planning, academic decisions, and career guidance.',
        },
        {
          title: 'Language & Summer Schools',
          desc: 'Guidance on selecting the right institution, program, and city for language and summer school programs, with support for accommodation and short-term student visa applications.',
        },
        {
          title: 'High School for Teenagers',
          desc: 'End-to-end planning and application support for students pursuing high school education in Canada, including school selection, accommodation, and long-term student visa guidance.',
        },
      ],
    },
    how: {
      kicker: 'HOW WE WORK',
      title: 'A clear roadmap in four steps',
      steps: [
        { n: '1', title: 'Consultation', desc: 'In our first meeting we clarify your goals, priorities and timeline together.' },
        { n: '2', title: 'Profile Assessment', desc: "We review your academic background, language proficiency and immigration criteria in detail, and build education plans tailored to our clients' needs." },
        { n: '3', title: 'Strategy & Applications', desc: 'We build a strategy tailored to you and guide you step by step through document preparation. Alongside one-on-one tutoring, summer school planning and an exam-driven study calendar, we offer a comprehensive system that tracks your whole application process and its results.' },
        { n: '4', title: 'Admission & Visa Support', desc: 'After your education or immigration application, we stay physically by your side through the visa, residency and citizenship process — and after you settle in.' },
      ],
    },
    testimonials: {
      kicker: 'STUDENT & FAMILY REVIEWS',
      title: 'What our clients say',
      items: [
        { quote: 'We got clear, honest answers to every question throughout the process. Our application strategy was genuinely tailored to us.', name: 'Deniz K.', meta: 'University of Toronto — Admitted 2026' },
        { quote: 'They followed our immigration concerns from start to finish; we were never left on our own at any stage.', name: 'Ece & Family', meta: 'Ontario — Residency Application' },
        { quote: 'Working with a team fluent in both legal and technical detail gave us real confidence. Highly recommend.', name: 'Mert Y.', meta: 'McGill University — Admitted 2026' },
      ],
    },
    cta: { title: 'Start Your Journey Today', sub: "Let's assess your goals together.", button: 'Book a Free Consultation' },
    footer: {
      email: { display: 'info@mapleconsulting.com', href: 'info@atlanticedu.com' },
      phone: { display: '+90 536 999 99 99 ', href: '+902123270000' },
      legal: 'Maple Leaf Education and Immigration Consulting does not provide, and does not claim to provide, any guarantee of outcome regarding immigration, citizenship or university education applications. Information on this site is for general informational purposes only and does not constitute legal advice. For legal questions and your specific immigration circumstances, please consult a licensed attorney or authorized immigration representative.',
      rights: 'All rights reserved.',
    },
  },
};

export default function Home() {
  const { lang } = useLang();
  const t = content[lang];

  useDocumentMeta({
    description: 'Education and immigration counselling for students and professionals pursuing opportunities abroad.',
    path: '/',
  });

  return (
    <div className="page">
      <Header />

      <section className="hero section-divider">
        <div className="container hero-grid">
          <div>
            <div className="kicker">{t.hero.kicker}</div>
            <h1 className="hero-title">{t.hero.title}</h1>
            <p className="hero-sub">{t.hero.sub}</p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary">
                {t.hero.ctaPrimary}
              </Link>
              <Link to="/services" className="btn btn-secondary">
                {t.hero.ctaSecondary}
              </Link>
            </div>
          </div>
          <div className="hero-image-wrap">
            <img src={heroImg} alt="" className="hero-image" />
          </div>
        </div>
      </section>

      <section className="section-divider why-section">
        <div className="container">
          <div className="kicker">{t.why.kicker}</div>
          <h2 className="section-title">{t.why.title}</h2>
          <div className="why-grid">
            {t.why.items.map((item) => (
              <div className="rail-item" key={item.n}>
                <div className="rail-n">{item.n}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-divider">
        <div className="container gallery-grid">
          <div className="gallery-img" style={{ backgroundImage: `url(${gallery1})` }} />
          <div className="gallery-img" style={{ backgroundImage: `url(${gallery2})` }} />
          <div className="gallery-img" style={{ backgroundImage: `url(${gallery3})` }} />
        </div>
      </section>

      <section className="section-divider services-section">
        <div className="container">
          <div className="services-header">
            <div>
              <div className="kicker">{t.services.kicker}</div>
              <h2 className="section-title" style={{ margin: 0 }}>
                {t.services.title}
              </h2>
            </div>
            <Link to="/services" className="view-all-link">
              {t.services.viewAll} →
            </Link>
          </div>
          <div className="services-grid">
            {t.services.items.map((s) => (
              <div className="service-card" key={s.title}>
                <div className="service-icon">🍁</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-divider how-section">
        <div className="container">
          <div className="kicker">{t.how.kicker}</div>
          <h2 className="section-title">{t.how.title}</h2>
          <div className="how-grid">
            {t.how.steps.map((step) => (
              <div className="rail-item" key={step.n}>
                <div className="how-n">{step.n}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="section-divider testimonials-section">
        <div className="container">
          <div className="kicker">{t.testimonials.kicker}</div>
          <h2 className="section-title">{t.testimonials.title}</h2>
          <div className="testimonials-grid">
            {t.testimonials.items.map((item) => (
              <div className="testimonial-card" key={item.name}>
                <div className="stars">★★★★★</div>
                <p className="quote">{item.quote}</p>
                <div className="testimonial-meta">
                  <div className="testimonial-name">{item.name}</div>
                  <div className="testimonial-sub">{item.meta}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <section className="cta-banner" style={{ backgroundImage: `url(${ctaBg})` }}>
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

      <Footer logoHeight={196} email={t.footer.email} phone={t.footer.phone} legal={t.footer.legal} rights={t.footer.rights} />
    </div>
  );
}
