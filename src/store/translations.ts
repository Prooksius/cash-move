import Client from '@assets/img/client.jpg'
import Client2 from '@assets/img/client2.png'
import Client3 from '@assets/img/client3.png'
import Client4 from '@assets/img/client4.png'
import Client5 from '@assets/img/client5.png'

export type TTranslation = Record<string, string>
export type TTranslations = Record<string, TTranslation>

export const translations: TTranslations = {
	TopMenuHowItWorks: {
		ru: 'Как это работает',
		en: 'How it works',
	},
	TopMenuReviews: {
		ru: 'Отзывы',
		en: 'Reviews',
	},
	TopMenuFAQ: {
		ru: 'ЧАВО',
		en: 'FAQ',
	},
	HeaderSignUp: {
		ru: 'Регистрация',
		en: 'Sign up',
	},
	SignUpPopupTitle: {
		ru: 'Регистрация',
		en: 'Sign up',
	},
	SignUpPopupSubmit: {
		ru: 'Отправить',
		en: 'Submit',
	},
	FieldName: {
		ru: 'Имя',
		en: 'Name',
	},
	FieldEmail: {
		ru: 'Email',
		en: 'Email',
	},
	FieldPhone: {
		ru: 'Телефон',
		en: 'Phone',
	},
	FieldErrorRequired: {
		ru: 'Поле обязательно',
		en: 'Field required',
	},
	FieldErrorTooShort: {
		ru: 'Поле слишком короткое',
		en: 'Field too short',
	},
	FieldErrorTooLong: {
		ru: 'Поле слишком длинное',
		en: 'Field too long',
	},
	FieldErrorPhoneRequired: {
		ru: 'Телефон обязателен',
		en: 'Phone required',
	},
	FieldErrorPhoneError: {
		ru: 'Телефон неверный',
		en: 'Invalid phone number',
	},
	FieldErrorEmailRequired: {
		ru: 'Email обязателен',
		en: 'Email required',
	},
	FieldErrorEmailError: {
		ru: 'Email неверный',
		en: 'Invalid Email',
	},
	CalcBlockCompleteRequest: {
		ru: 'Совершить перевод',
		en: 'Complete request',
	},
	CalcBlockNext: {
		ru: 'Далее',
		en: 'Next',
	},
	CalcBlockYouGive: {
		ru: 'Отдаешь',
		en: 'You give',
	},
	CalcBlockYouGet: {
		ru: 'Получаешь',
		en: 'You get',
	},
	CalcBlockCourier: {
		ru: 'Курьер',
		en: 'Courier',
	},
	CalcBlockOffice: {
		ru: 'Офис',
		en: 'Office',
	},
	CalcBlockToCard: {
		ru: 'На карту',
		en: 'To card',
	},
	CalcBlockToIn: {
		ru: 'в',
		en: 'in',
	},
	CalcBlockToAccount: {
		ru: 'На счет',
		en: 'To account',
	},
	CalcBlockToSBP: {
		ru: 'На счет',
		en: 'To account',
	},
	CalcBlockGiveInCash: {
		ru: 'Наличными',
		en: 'Give in cash',
	},
	CalcBlockGetInCash: {
		ru: 'Наличными',
		en: 'Get in cash',
	},
	CalcBlockMove: {
		ru: 'Отправить',
		en: 'Move',
	},
	CalcBlockCity: {
		ru: 'Город',
		en: 'City',
	},
	CalcBlockYourCountry: {
		ru: 'Ваша страна',
		en: 'Your country',
	},
	CalcBlockYourCurrency: {
		ru: 'Ваша валюта',
		en: 'Your currency',
	},
	CalcBlockCryptoCurrencies: {
		ru: 'Криптовалюты',
		en: 'Cryptocurrencies',
	},
	CalcBlockFiatCurrencies: {
		ru: 'Фиатные деньги',
		en: 'Fiat Money',
	},
	CalcBlockEnterASum: {
		ru: 'Введите сумму',
		en: 'Enter a sum',
	},
	CalcBlockTerms: {
		ru: 'Условия и соглашение',
		en: 'Terms and agreement',
	},
	CalcBlockImmediately: {
		ru: 'Сразу',
		en: 'Immediately',
	},
	CalcBlockWeek: {
		ru: 'В теч. недели (скидка 10%)',
		en: 'During week (-10% discount)',
	},
	CalcBlockServiceFee: {
		ru: 'Плата за обслуживание',
		en: 'Service fee',
	},
	CalcBlockConfirm: {
		ru: 'Подтвердить',
		en: 'Confirm',
	},
	FooterForExchanger: {
		ru: 'Для обменников',
		en: 'For exchanger',
	},
	FooterSupport: {
		ru: 'Поддержка',
		en: 'Support',
	},
	FooterCallUs: {
		ru: 'Звоните нам',
		en: 'Call us',
	},
	FooterChatWithUs: {
		ru: 'Пишите в чат',
		en: 'Chat with us',
	},
	FooterAboutUs: {
		ru: 'О нас',
		en: 'About us',
	},
	FooterHelp: {
		ru: 'Помощь',
		en: 'Help',
	},
	FooterLegal: {
		ru: 'Правовая инф.',
		en: 'Legal',
	},
	HowItWorksTitle: {
		ru: 'Как это работает',
		en: 'How it works',
	},
	HowItWorksSlide1Title: {
		ru: 'Создать запрос на обмен',
		en: 'Create request for an exchange',
	},
	HowItWorksSlide1Desc: {
		ru: 'Более 80 стран и 60 доступных валют',
		en: 'More than 80 countries and 60 available currencies',
	},
	HowItWorksSlide2Title: {
		ru: 'Система находит соответствующие обменники',
		en: 'System finds relevant exchangers',
	},
	HowItWorksSlide2Desc: {
		ru: 'Более 1000 обменников с подтвержденными и зарезервированными средствами',
		en: 'More than 1000 exchangers with confirmed and reserved funds',
	},
	HowItWorksSlide3Title: {
		ru: 'Подтвердите предлагаемые курсы обмена и внесите деньги',
		en: 'Confirm rates of exchangers offers and deposit money',
	},
	HowItWorksSlide3Desc: {
		ru: 'Деньги хранятся в системе без перевода в обменнику',
		en: 'Money holds in the system without transferring to the exchanger',
	},
	HowItWorksSlide4Title: {
		ru: 'Такая же сумма блокируется на кошельке обменника',
		en: 'Same amount of money blocks on exchanger’s wallet',
	},
	HowItWorksSlide4Desc: {
		ru: 'Обменнику доступны только сделки, соответствующие его резервному фонду, внесенному в сервис',
		en: 'The exchanger can take transactions only corresponding to its reserve fund deposited in the service',
	},
	HowItWorksSlide5Title: {
		ru: 'Получите свои деньги и подтвердите это в системе',
		en: 'Get your money and confirm that in system',
	},
	HowItWorksSlide5Desc: {
		ru: 'Обменник получит зарезервированные деньги только после того, как вы получите свои',
		en: 'Exchanger get reserved money only after you receive yours',
	},
	HowItWorksSlide6Title: {
		ru: 'Обменник получит свои деньги, а вы получите свои без риска',
		en: 'Exchanger get his money, and you get yours without a risk',
	},
	HowItWorksSlide6Desc: {
		ru: 'Наш сервис защищает вас от любых рисков, связанных с криптообменом',
		en: 'Our service protects you from any risks of crypto exchange',
	},
	ServiceInfoText: {
		ru: 'Сервис позволяет перемещать ваши средства между странами, соединяя криптообменники из разных стран и выступая гарантом. Просто укажите какую валюту отдаете и какую хотите получить, а система сама создаст сделку и подберет верифицированные обменники, готовые выполнить ваш запрос. Ваши деньги будут зарезериврованы в системе и не поступят обменнику пока вы не получите выплату по вашему обмену.',
		en: 'The service allows you to move your funds between countries, connecting crypto exchanges from different countries and acting as a guarantor. Just specify which currency you are giving and which one you want to receive, and the system will create the transaction itself and select verified exchangers ready to fulfill your request. Your money will be reserved in the system and will not be received by the exchanger until you receive payment for your exchange.',
	},
	ProtectionText: {
		ru: 'Сервис соединяет обменники и клиента без перевода денег, выступая гарантом сохранности ваших средств',
		en: 'The service connects the exchangers and the client without transferring money acting as a guarantor of your funds',
	},
	ProtectionSlogan: {
		ru: '1032 обменников в 89 странах',
		en: '1032 exchangers in 89 countries',
	},
	FirstBlockTitle: {
		ru: 'Переводи <span>деньги</span> без границ',
		en: 'Move <span>money</span> without borders',
	},
	FirstBlockText: {
		ru: 'Безопасное и защищенное перемещение средств между странами с помощью криптовалюты',
		en: 'Safe and insured movement of funds between countries by crypto without a risk',
	},
}

type TReview = {
	avatar: string
	font: string
	text: Record<string, string>
	name: Record<string, string>
}

export const allReviews: TReview[] = [
	{
		avatar: Client2,
		font: '250%',
		text: {
			ru: 'Ты не переживаешь о выборе правильного и надежного обменника, сервис защищает твои средства пока ты не получишь деньги',
			en: "You don't worry about choosing the right and reliable exchanger, the service protects your funds until you get the money",
		},
		name: {
			ru: 'Алекс К.',
			en: 'Alex K.',
		},
	},
	{
		avatar: Client3,
		font: '150%',
		text: {
			ru: 'Обменные операции проводятся быстро, указала какие деньги отдаю, какие хочу получить, больше не о чем переживать. Тебе не надо проверять каждый обменник и находить разные обменники, чтобы сначала вывести из рублей в крипту, а потом вывести например из крипты в воны, тут все делается одной операцией, система сама находит обменники из своей базы с соответствующими валютами и резервами и совершает обмен',
			en: 'Exchange operations are carried out quickly, I indicated which money I give, which I want to receive, there is nothing more to worry about. You do not need to check each exchanger and find different exchangers to first withdraw from rubles to the crypt, and then withdraw, for example, from the crypt to the won, everything is done in one operation, the system itself finds exchangers from its database with the corresponding currencies and reserves and makes an exchange',
		},
		name: {
			ru: 'Юлия Б.',
			en: 'Julia B.',
		},
	},
	{
		avatar: Client4,
		font: '150%',
		text: {
			ru: 'Если тебе понадобились деньги в любой точке мира, но нет возможности перевести напрямую, ты можешь легко сделать это через Pay-planet.pro. Ты вносишь свои средства удобным способом (картой, наличными и др.) и в любой валюте, криптообменники меняют их на криптовалюту и отдают тебе в необходимой тебе валюте наличными, на карту или банковский счет. А вишенка на торте, то что ты не рискуешь и не передаешь деньги напрямую обменнику, площадка резервирует и защищает твои средства.',
			en: 'If you need money anywhere in the world, but there is no way to transfer directly, you can easily do it via Pay-planet.pro. You deposit your funds in a convenient way (card, cash, etc.) and in any currency, crypto exchanges change them to cryptocurrency and give them to you in the currency you need in cash, to a card or bank account. And the cherry on the cake is that you do not take risks and do not transfer money directly to the exchanger, the platform reserves and protects your funds.',
		},
		name: {
			ru: 'Рамиль Х.',
			en: 'Ramil H.',
		},
	},
	{
		avatar: Client5,
		font: '280%',
		text: {
			ru: 'Крутой сервис, отличная поддержка и моментальные обмены',
			en: 'Cool service, excellent support and instant exchanges',
		},
		name: {
			ru: 'Максим С.',
			en: 'Maxim S.',
		},
	},
]
