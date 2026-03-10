"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AnimatedOrbs } from "@/components/ui/AnimatedOrbs";
import { useLang } from "@/contexts/LangContext";

function PrivacyEN() {
  return (
    <>
      <h1 className="text-3xl font-bold text-tx mb-8">Privacy Policy</h1>
      <p className="text-tx2 text-sm mb-6">Last updated: March 2026</p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-tx mb-3">1. Introduction</h2>
        <p className="text-tx2 text-sm leading-relaxed">
          Genfy (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services at nexus.studio.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-tx mb-3">2. Information We Collect</h2>
        <p className="text-tx2 text-sm leading-relaxed mb-3">We may collect information about you in various ways:</p>
        <ul className="list-disc pl-6 text-tx2 text-sm leading-relaxed space-y-2">
          <li><strong className="text-tx">Personal Data:</strong> Name, email address, and account information provided during registration.</li>
          <li><strong className="text-tx">Usage Data:</strong> Information about how you use our services, including video generation history.</li>
          <li><strong className="text-tx">Images:</strong> Product images you upload for video generation. These are processed and may be temporarily stored.</li>
          <li><strong className="text-tx">Payment Data:</strong> Payment information is processed securely through our payment provider (AbacatePay) and is never stored on our servers.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-tx mb-3">3. How We Use Your Information</h2>
        <ul className="list-disc pl-6 text-tx2 text-sm leading-relaxed space-y-2">
          <li>To provide and maintain our video generation service</li>
          <li>To process your transactions and manage your account</li>
          <li>To improve and personalize user experience</li>
          <li>To communicate with you about updates and support</li>
          <li>To comply with legal obligations</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-tx mb-3">4. Data Storage & Security</h2>
        <p className="text-tx2 text-sm leading-relaxed">
          Your data is stored securely using Supabase infrastructure with encryption at rest and in transit. Generated videos are stored in secure cloud storage with signed URLs. We implement industry-standard security measures to protect your information.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-tx mb-3">5. Third-Party Services</h2>
        <p className="text-tx2 text-sm leading-relaxed">
          We use third-party AI services for video generation. Your product images may be processed by these services. We also use Google for authentication and AbacatePay for payment processing.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-tx mb-3">6. Cookies</h2>
        <p className="text-tx2 text-sm leading-relaxed">
          We use essential cookies for authentication and preferences (theme, language). We do not use tracking or advertising cookies. You can manage your cookie preferences through our cookie consent banner.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-tx mb-3">7. Your Rights</h2>
        <p className="text-tx2 text-sm leading-relaxed">
          You have the right to access, correct, or delete your personal data. You may also request data portability or restrict processing. To exercise these rights, contact us at the email below.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-tx mb-3">8. Contact</h2>
        <p className="text-tx2 text-sm leading-relaxed">
          For questions about this Privacy Policy, contact us through our social media channels or at the app support section.
        </p>
      </section>
    </>
  );
}

function PrivacyPT() {
  return (
    <>
      <h1 className="text-3xl font-bold text-tx mb-8">Pol&iacute;tica de Privacidade</h1>
      <p className="text-tx2 text-sm mb-6">&Uacute;ltima atualiza&ccedil;&atilde;o: Mar&ccedil;o de 2026</p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-tx mb-3">1. Introdu&ccedil;&atilde;o</h2>
        <p className="text-tx2 text-sm leading-relaxed">
          O Genfy (&quot;n&oacute;s&quot;, &quot;nosso&quot;) est&aacute; comprometido em proteger sua privacidade. Esta Pol&iacute;tica de Privacidade explica como coletamos, usamos, divulgamos e protegemos suas informa&ccedil;&otilde;es quando voc&ecirc; visita nosso site e utiliza nossos servi&ccedil;os em nexus.studio.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-tx mb-3">2. Informa&ccedil;&otilde;es que Coletamos</h2>
        <p className="text-tx2 text-sm leading-relaxed mb-3">Podemos coletar informa&ccedil;&otilde;es sobre voc&ecirc; de v&aacute;rias formas:</p>
        <ul className="list-disc pl-6 text-tx2 text-sm leading-relaxed space-y-2">
          <li><strong className="text-tx">Dados Pessoais:</strong> Nome, endere&ccedil;o de e-mail e informa&ccedil;&otilde;es da conta fornecidas durante o cadastro.</li>
          <li><strong className="text-tx">Dados de Uso:</strong> Informa&ccedil;&otilde;es sobre como voc&ecirc; usa nossos servi&ccedil;os, incluindo hist&oacute;rico de gera&ccedil;&atilde;o de v&iacute;deos.</li>
          <li><strong className="text-tx">Imagens:</strong> Imagens de produtos enviadas para gera&ccedil;&atilde;o de v&iacute;deo. Estas s&atilde;o processadas e podem ser armazenadas temporariamente.</li>
          <li><strong className="text-tx">Dados de Pagamento:</strong> Informa&ccedil;&otilde;es de pagamento s&atilde;o processadas com seguran&ccedil;a pelo nosso provedor (AbacatePay) e nunca s&atilde;o armazenadas em nossos servidores.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-tx mb-3">3. Como Usamos Suas Informa&ccedil;&otilde;es</h2>
        <ul className="list-disc pl-6 text-tx2 text-sm leading-relaxed space-y-2">
          <li>Para fornecer e manter nosso servi&ccedil;o de gera&ccedil;&atilde;o de v&iacute;deos</li>
          <li>Para processar suas transa&ccedil;&otilde;es e gerenciar sua conta</li>
          <li>Para melhorar e personalizar a experi&ecirc;ncia do usu&aacute;rio</li>
          <li>Para nos comunicarmos sobre atualiza&ccedil;&otilde;es e suporte</li>
          <li>Para cumprir obriga&ccedil;&otilde;es legais</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-tx mb-3">4. Armazenamento e Seguran&ccedil;a</h2>
        <p className="text-tx2 text-sm leading-relaxed">
          Seus dados s&atilde;o armazenados com seguran&ccedil;a usando a infraestrutura Supabase com criptografia em repouso e em tr&acirc;nsito. V&iacute;deos gerados s&atilde;o armazenados em armazenamento seguro na nuvem com URLs assinadas. Implementamos medidas de seguran&ccedil;a padr&atilde;o da ind&uacute;stria para proteger suas informa&ccedil;&otilde;es.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-tx mb-3">5. Servi&ccedil;os de Terceiros</h2>
        <p className="text-tx2 text-sm leading-relaxed">
          Utilizamos servi&ccedil;os de IA de terceiros para gera&ccedil;&atilde;o de v&iacute;deos. Suas imagens de produtos podem ser processadas por esses servi&ccedil;os. Tamb&eacute;m usamos Google para autentica&ccedil;&atilde;o e AbacatePay para processamento de pagamentos.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-tx mb-3">6. Cookies</h2>
        <p className="text-tx2 text-sm leading-relaxed">
          Usamos cookies essenciais para autentica&ccedil;&atilde;o e prefer&ecirc;ncias (tema, idioma). N&atilde;o usamos cookies de rastreamento ou publicidade. Voc&ecirc; pode gerenciar suas prefer&ecirc;ncias de cookies atrav&eacute;s do nosso banner de consentimento.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-tx mb-3">7. Seus Direitos</h2>
        <p className="text-tx2 text-sm leading-relaxed">
          Voc&ecirc; tem o direito de acessar, corrigir ou excluir seus dados pessoais. Tamb&eacute;m pode solicitar portabilidade de dados ou restringir o processamento. Para exercer esses direitos, entre em contato conosco pelo e-mail abaixo.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-tx mb-3">8. Contato</h2>
        <p className="text-tx2 text-sm leading-relaxed">
          Para d&uacute;vidas sobre esta Pol&iacute;tica de Privacidade, entre em contato atrav&eacute;s de nossas redes sociais ou pela se&ccedil;&atilde;o de suporte do aplicativo.
        </p>
      </section>
    </>
  );
}

export default function PrivacyPage() {
  const { lang } = useLang();

  return (
    <div className="min-h-screen relative">
      <AnimatedOrbs />
      <Navbar />
      <main className="relative z-10 pt-28 pb-16">
        <div className="max-w-3xl mx-auto px-6">
          <article className="glass-card p-8 md:p-12">
            {lang === "pt" ? <PrivacyPT /> : <PrivacyEN />}
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}
