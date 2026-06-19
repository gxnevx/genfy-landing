"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AnimatedOrbs } from "@/components/ui/AnimatedOrbs";
import { useLang } from "@/contexts/LangContext";

function PrivacyEN() {
  return (
    <>
      <h1 className="text-3xl font-bold text-tx mb-8">Privacy Policy</h1>
      <p className="text-tx2 text-sm mb-6">Last updated: June 2026</p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-tx mb-3">1. Introduction</h2>
        <p className="text-tx2 text-sm leading-relaxed">
          Genfy (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard information when you visit home.genfy.studio or use the Genfy Studio application at genfy.studio.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-tx mb-3">2. Information We Collect</h2>
        <p className="text-tx2 text-sm leading-relaxed mb-3">We may collect information about you in various ways:</p>
        <ul className="list-disc pl-6 text-tx2 text-sm leading-relaxed space-y-2">
          <li><strong className="text-tx">Personal Data:</strong> Name, email address, and account information provided during registration.</li>
          <li><strong className="text-tx">Usage Data:</strong> Information about how you use our services, including video generation history.</li>
          <li><strong className="text-tx">Images:</strong> Product images you upload for video generation. These are processed and may be temporarily stored.</li>
          <li><strong className="text-tx">Payment Data:</strong> Payment details are processed securely by Stripe. Genfy stores transaction records such as package, amount, status, and provider reference, but does not store full card details.</li>
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
          We use third-party AI services for video generation, Supabase for authentication and data infrastructure, Stripe for payments, Google for authentication and measurement, PostHog for product analytics, and Vercel for hosting and performance telemetry. Product assets may be processed by video generation providers only to deliver requested features.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-tx mb-3">6. Cookies & Analytics</h2>
        <p className="text-tx2 text-sm leading-relaxed mb-3">
          We use essential cookies for authentication, security, consent, attribution, and preferences. Optional analytics and marketing storage remain denied until you make a choice in our consent banner.
        </p>
        <p className="text-tx2 text-sm leading-relaxed mb-3">
          <strong className="text-tx">Google Tag Manager, Google Analytics, and Google Ads:</strong> With the relevant consent, these services help us understand visits, campaign attribution, account activation, and purchases. Advertising storage, advertising user data, and ad personalization are denied by default and enabled only with marketing consent.
        </p>
        <p className="text-tx2 text-sm leading-relaxed">
          <strong className="text-tx">PostHog and Vercel:</strong> PostHog is enabled only with analytics consent and helps us understand product usage. Vercel provides hosting and technical performance telemetry. You may reject optional storage or change your choice through the consent controls.
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
          For questions or privacy requests, contact genfy.studio@gmail.com or use the support section inside Genfy Studio.
        </p>
      </section>
    </>
  );
}

function PrivacyPT() {
  return (
    <>
      <h1 className="text-3xl font-bold text-tx mb-8">Pol&iacute;tica de Privacidade</h1>
      <p className="text-tx2 text-sm mb-6">&Uacute;ltima atualiza&ccedil;&atilde;o: Junho de 2026</p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-tx mb-3">1. Introdu&ccedil;&atilde;o</h2>
        <p className="text-tx2 text-sm leading-relaxed">
          O Genfy (&quot;n&oacute;s&quot;, &quot;nosso&quot;) est&aacute; comprometido em proteger sua privacidade. Esta Pol&iacute;tica de Privacidade explica como coletamos, usamos, compartilhamos e protegemos informa&ccedil;&otilde;es quando voc&ecirc; visita home.genfy.studio ou usa o Genfy Studio em genfy.studio.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-tx mb-3">2. Informa&ccedil;&otilde;es que Coletamos</h2>
        <p className="text-tx2 text-sm leading-relaxed mb-3">Podemos coletar informa&ccedil;&otilde;es sobre voc&ecirc; de v&aacute;rias formas:</p>
        <ul className="list-disc pl-6 text-tx2 text-sm leading-relaxed space-y-2">
          <li><strong className="text-tx">Dados Pessoais:</strong> Nome, endere&ccedil;o de e-mail e informa&ccedil;&otilde;es da conta fornecidas durante o cadastro.</li>
          <li><strong className="text-tx">Dados de Uso:</strong> Informa&ccedil;&otilde;es sobre como voc&ecirc; usa nossos servi&ccedil;os, incluindo hist&oacute;rico de gera&ccedil;&atilde;o de v&iacute;deos.</li>
          <li><strong className="text-tx">Imagens:</strong> Imagens de produtos enviadas para gera&ccedil;&atilde;o de v&iacute;deo. Estas s&atilde;o processadas e podem ser armazenadas temporariamente.</li>
          <li><strong className="text-tx">Dados de Pagamento:</strong> Os dados de pagamento s&atilde;o processados com seguran&ccedil;a pela Stripe. O Genfy armazena registros da transa&ccedil;&atilde;o, como pacote, valor, status e refer&ecirc;ncia do provedor, mas n&atilde;o armazena os dados completos do cart&atilde;o.</li>
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
          Utilizamos servi&ccedil;os de IA de terceiros para gera&ccedil;&atilde;o de v&iacute;deos, Supabase para autentica&ccedil;&atilde;o e infraestrutura de dados, Stripe para pagamentos, Google para autentica&ccedil;&atilde;o e mensura&ccedil;&atilde;o, PostHog para analytics de produto e Vercel para hospedagem e telemetria de performance. Os ativos do produto podem ser processados pelos provedores de v&iacute;deo apenas para entregar as funcionalidades solicitadas.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-tx mb-3">6. Cookies & Analytics</h2>
        <p className="text-tx2 text-sm leading-relaxed mb-3">
          Usamos cookies essenciais para autentica&ccedil;&atilde;o, seguran&ccedil;a, consentimento, atribui&ccedil;&atilde;o e prefer&ecirc;ncias. O armazenamento opcional de analytics e marketing permanece negado at&eacute; que voc&ecirc; escolha no banner de consentimento.
        </p>
        <p className="text-tx2 text-sm leading-relaxed mb-3">
          <strong className="text-tx">Google Tag Manager, Google Analytics e Google Ads:</strong> Com o consentimento correspondente, esses servi&ccedil;os nos ajudam a entender visitas, atribui&ccedil;&atilde;o de campanhas, ativa&ccedil;&atilde;o de contas e compras. O armazenamento de publicidade, os dados de usu&aacute;rio para publicidade e a personaliza&ccedil;&atilde;o de an&uacute;ncios ficam negados por padr&atilde;o e s&oacute; s&atilde;o ativados com consentimento de marketing.
        </p>
        <p className="text-tx2 text-sm leading-relaxed">
          <strong className="text-tx">PostHog e Vercel:</strong> O PostHog &eacute; ativado somente com consentimento de analytics e nos ajuda a entender o uso do produto. A Vercel fornece hospedagem e telemetria t&eacute;cnica de performance. Voc&ecirc; pode recusar o armazenamento opcional ou alterar sua escolha pelos controles de consentimento.
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
          Para d&uacute;vidas ou solicita&ccedil;&otilde;es de privacidade, entre em contato pelo e-mail genfy.studio@gmail.com ou pela se&ccedil;&atilde;o de suporte do Genfy Studio.
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
