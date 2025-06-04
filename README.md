# 💱 Currency Converter App

Aplicativo mobile desenvolvido em **React Native** com **Expo Router** para consultar em tempo real a cotação de diferentes moedas e ativos utilizando a **API da AwesomeAPI**.

## 📲 Funcionalidades

- Consulta em tempo real da cotação de:

  - Dólar Americano (USD)
  - Euro (EUR)
  - Bitcoin (BTC)
  - Ouro (XAU)
  - Libra Egípcia (EGP)

- Navegação por **Drawer Menu** para alternar entre as moedas.
- Botão de **"Atualizar"** para fazer novas consultas.
- Indicador de **carregamento** enquanto busca os dados.
- Interface simples e intuitiva.

---

## 🚀 Tecnologias utilizadas

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [Expo Router](https://expo.github.io/router/)
- [React Native Gesture Handler](https://docs.swmansion.com/react-native-gesture-handler/docs/)
- [AwesomeAPI - Economia](https://docs.awesomeapi.com.br/api-de-moedas)

---

## 🗂️ Estrutura de pastas

/assets
├── bitcoin.png
├── dolar.png
├── euro.png
├── libra.png
└── ouro.png

/components
└── button.tsx

/services
└── awesomeapi.ts

/app
├── \_layout.tsx
├── index.tsx
├── eur.tsx
├── btcoin.tsx
├── gold.tsx
└── libra.tsx

markdown
Copiar
Editar

---

## ⚙️ Como executar o projeto

### ✅ Pré-requisitos:

- [Node.js](https://nodejs.org/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- Gerenciador de pacotes: `npm` ou `yarn`

### ✅ Passos:

1. **Clone o repositório:**

```bash
git clone https://github.com/tscouto/Currency-Converter-App.git
```

2. **Instale as dependências:**

```bash
npm install
# ou
yarn
```

3. **Execute o app:**

```bash
npx expo start
```

4. **Use um emulador ou o aplicativo Expo Go no celular para visualizar.**

## 🧩 Componentes principais

### ✅ Button

Componente reutilizável para o botão de atualização, utilizando o `Pressable` do React Native.

### ✅ Serviços

Arquivo `awesomeapi.ts` responsável por realizar as requisições HTTP para a **AwesomeAPI**, com funções específicas para cada moeda ou ativo.

### ✅ Telas

Cada moeda ou ativo possui sua própria tela:

- `index.tsx`
- `eur.tsx`
- `btcoin.tsx`
- `gold.tsx`
- `libra.tsx`

Utilizam **useState** e **useEffect** para buscar e exibir os dados.

### ✅ Navegação

Implementada com **expo-router**, utilizando **Drawer** para navegação entre as diferentes telas.

---

## 🛠️ APIs utilizadas

**AwesomeAPI - Economia**  
📄 [Documentação oficial](https://docs.awesomeapi.com.br/api-de-moedas)

Fornece cotações em tempo real de diversas moedas e ativos.

---

## 🎨 Estilo visual

- Fundo escuro para melhor contraste com textos e gráficos.
- Interface com foco em simplicidade e usabilidade.
- Ícones representativos de cada moeda/ativo para fácil identificação.

---

## 🐛 Possíveis melhorias futuras

- ✅ Adicionar conversão entre múltiplas moedas.
- ✅ Exibir histórico de cotações.
- ✅ Notificações de alteração significativa no valor.
- ✅ Opção de tema claro/escuro.

---

## 🚀 Tecnologias

- React Native
- Expo
- TypeScript
- Expo Router
- AwesomeAPI

---
