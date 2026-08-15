import { useState } from 'react';
import { useLang } from '../context/LangContext';
import useDocumentMeta from '../hooks/useDocumentMeta';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Contact.css';

const content = {
  tr: {
    header: {
      kicker: 'İLETİŞİM',
      title: 'Yolculuğunuza başlamak için bize yazın',
      sub: 'Formu doldurun, ekibimiz 1 iş günü içinde sizinle iletişime geçsin. İlk görüşme her zaman ücretsizdir.',
    },
    form: {
      name: 'Ad Soyad',
      email: 'E-posta',
      phone: 'Telefon',
      topic: 'İlgilendiğiniz Hizmet',
      message: 'Mesajınız',
      topics: ['Öğrenci Danışmanlığı', 'Göçmenlik Danışmanlığı', 'Seçkin Üniversite Kabul Stratejisi', 'Dil Okulları / Yaz Okulu', 'Yurt Dışı Lise', 'Diğer'],
      submit: 'Gönder',
      sentKicker: 'TEŞEKKÜRLER',
      sentTitle: 'Mesajınız iletildi',
      sentBody: 'Ekibimiz en kısa sürede sizinle iletişime geçecek.',
    },
    footer: {
      email: { display: 'info@mapleleafconsulting.com', href: 'info@atlanticedu.com' },
      phone: { display: '+90 212 327 00 00', href: '+902123270000' },
      legal: 'Maple Leaf Education and Immigration Consulting; göçmenlik, vatandaşlık veya üniversite eğitim başvurularıyla ilgili herhangi bir sonuca dair garanti sunmaz ve sunduğunu iddia etmez. Bu sitedeki bilgiler yalnızca genel bilgilendirme amaçlıdır ve hukuki tavsiye niteliği taşımaz. Hukuki sorularınız ve göçmenlik özel durumunuzla ilgili olarak yetkili bir avukata veya lisanslı göçmenlik temsilcisine başvurmanız önerilir.',
    },
  },
  en: {
    header: {
      kicker: 'CONTACT',
      title: 'Write to us to start your journey',
      sub: 'Fill out the form and our team will get back to you within 1 business day. The first consultation is always free.',
    },
    form: {
      name: 'Full Name',
      email: 'Email',
      phone: 'Phone',
      topic: 'Service of Interest',
      message: 'Your Message',
      topics: ['Student Advisory', 'Immigration Advisory', 'Elite University Admissions Strategy', 'Language / Summer Schools', 'Boarding School Abroad', 'Other'],
      submit: 'Send',
      sentKicker: 'THANK YOU',
      sentTitle: 'Your message has been sent',
      sentBody: 'Our team will get back to you shortly.',
    },
    footer: {
      email: { display: 'info@mapleleafconsulting.com', href: 'info@atlanticedu.com' },
      phone: { display: '+90 212 327 00 00', href: '+902123270000' },
      legal: 'Maple Leaf Education and Immigration Consulting does not provide, and does not claim to provide, any guarantee of outcome regarding immigration, citizenship or university education applications. Information on this site is for general informational purposes only and does not constitute legal advice. For legal questions and your specific immigration circumstances, please consult a licensed attorney or authorized immigration representative.',
    },
  },
};

export default function Contact() {
  const { lang } = useLang();
  const t = content[lang];

  const [form, setForm] = useState({ name: '', email: '', phone: '', topic: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  function updateField(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  useDocumentMeta({
    title: lang === 'tr' ? 'İletişim' : 'Contact',
    description: 'Ücretsiz danışma randevusu için bize yazın.',
    path: '/contact',
  });

  return (
    <div className="page">
      <Header showCta={false} />

      <section className="section-divider contact-header-section">
        <div className="container">
          <div className="kicker">{t.header.kicker}</div>
          <h1 className="contact-title">{t.header.title}</h1>
          <p className="contact-sub">{t.header.sub}</p>
        </div>
      </section>

      <section className="section-divider contact-form-section">
        <div className="container contact-form-grid">
          <div>
            {submitted ? (
              <div className="contact-sent">
                <div className="contact-sent-kicker">{t.form.sentKicker}</div>
                <h3>{t.form.sentTitle}</h3>
                <p>{t.form.sentBody}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div>
                  <label>{t.form.name}</label>
                  <input type="text" required value={form.name} onChange={updateField('name')} />
                </div>
                <div>
                  <label>{t.form.email}</label>
                  <input type="email" required value={form.email} onChange={updateField('email')} />
                </div>
                <div>
                  <label>{t.form.phone}</label>
                  <input type="tel" value={form.phone} onChange={updateField('phone')} />
                </div>
                <div>
                  <label>{t.form.topic}</label>
                  <select value={form.topic} onChange={updateField('topic')}>
                    {t.form.topics.map((opt) => (
                      <option value={opt} key={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label>{t.form.message}</label>
                  <textarea required value={form.message} onChange={updateField('message')} />
                </div>
                <button type="submit" className="btn btn-primary contact-submit">
                  {t.form.submit}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer email={t.footer.email} phone={t.footer.phone} legal={t.footer.legal} />
    </div>
  );
}
