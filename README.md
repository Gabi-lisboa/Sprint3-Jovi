# SmartCam

Landing page da SmartCam, uma solução de câmera inteligente com recursos de inteligência artificial para facilitar o registro de fotos, documentos e momentos do dia a dia.

## Tecnologias utilizadas

- React 19
- React Router
- Vite
- Tailwind CSS (utilizado de forma incremental na estilização)
- JavaScript
- HTML5 semântico
- CSS3 responsivo
- Boxicons
- Google Fonts (Poppins e Inter)

## Como instalar as dependências

É necessário ter o Node.js instalado.

No terminal, dentro da pasta do projeto, execute:

```bash
npm install
```

## Como executar o projeto

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

Depois, acesse o endereço exibido pelo Vite no terminal, normalmente:

```text
http://localhost:5173
```

Para gerar a versão de produção:

```bash
npm run build
```

## Back-end

A gente não tem back-end próprio, então usamos uma API mockada e uma API pública. Não precisa rodar nada além do `npm run dev`.

- API mockada: os arquivos JSON da pasta `public/api`. O `usuarios.json` é usado no login e o `fotos.json` mostra as fotos no painel.
- API pública: o [JSONPlaceholder](https://jsonplaceholder.typicode.com/), que recebe o POST do formulário de contato.

As chamadas ficam todas no `src/services/api.js`. Se a API não responder, a tela mostra uma mensagem de erro.

## Uso de inteligência artificial no desenvolvimento

Durante o desenvolvimento, utilizamos ferramentas de inteligência artificial generativa como apoio técnico para transformar a página HTML inicial em uma aplicação React com Vite, organizar a estrutura de componentes, revisar a responsividade e sugerir melhorias de acessibilidade, semântica e organização do código. A IA também auxiliou na identificação de ajustes necessários no menu responsivo, na integração do Tailwind CSS e na configuração do projeto. Todas as sugestões foram revisadas, adaptadas e testadas pela equipe antes de serem incorporadas ao projeto; a concepção visual, o conteúdo e as decisões finais da aplicação são responsabilidade da equipe.

## Login e rotas

A página inicial (`/`) e o login (`/login`) são públicas. O `/painel` é privado, então só abre se a pessoa estiver logada. Se tentar entrar direto no painel sem login, ela volta pro login.

Qualquer outro endereço cai numa página de "não encontrada".

Pra testar o login:

- E-mail: teste@smartcam.com
- Senha: 123456

Também dá pra entrar com felipe@smartcam.com e a senha smartcam.

O que testamos:

- Entrar no `/painel` sem login manda pro `/login`
- Login com campo vazio, e-mail sem @, senha curta ou senha errada mostra o erro
- Login certo leva pro `/painel`
- Entrar no `/login` já logado leva pro `/painel`
- O botão Sair tira o login e volta pro `/login`

## Deploy

Acesse a versão publicada na Vercel:

[https://jovi-landing-sprint3.vercel.app/](https://jovi-landing-sprint3.vercel.app/)
