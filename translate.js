var en = 'src/img/en.png';
var es = 'src/img/es.png';
var pt = 'src/img/pt.png';

// navbar
var solution = document.getElementById('solutions'); 
var prices = document.getElementById('pricing');
var clients = document.getElementById('clients');
var contact = document.getElementById('contact');

//description 
var description = document.getElementById('description');

//main texts 
var title = document.getElementById('title');
var audio = document.getElementById('audio');
var audioText = document.getElementById('audio_text');
var realTime = document.getElementById('real_time');
var timeText = document.getElementById('time_text');
var identification = document.getElementById('Identification');
var identificationGlobal = document.getElementById('identificationGlobal');
var analysis = document.getElementById('Analysis');
var analysisP = document.getElementById('AnalysisP');

var contents = {
    'en': {
        'lead': 'Turn speeches into insights with our powerful',
        'span': 'Artificial Intelligence API.',
        'imageUrl': `${en}`,
        'nav': {
            'solution': 'solutions',
            'clients': 'clients',
            'pricing': 'prices',
            'contact': 'contact',
        },
        'description' : 'is a set of APIs for converting speech into texts, as well as interpreting the dominant sentiment in the words. Our solution is trained on more than 500,000 hours of audio, transcribed by humans of a wide variety of ages, nationalities, accents and instructional levels. The API is sold under the SAAS (software as a service) model.',
        'audio': 'Audio Transcription',
        'Asynchronous': 'Asynchronous',
        'transcription': 'Asynchronous voice transcription API for pre-recorded audio. We have one of the best speech recognition engines in the world! The asynchronous speech-to-text feature is a strategic partner for your business. Whether you are extracting insights from audio or transcribing content at scale.',
        'realTime': 'Audio Transcription in',
        'time': 'real time',
        'timeText': 'The live-speech-to-text live transcription feature makes it possible to use real-time captions for your business. Our captions ensure that live lectures and training are accessible and can be archived for future use.',
        'identification': 'Identification of',
        'identificationText': 'languages in audios.',
        'identificationG': 'Getting global talk and insights. Our solution supports 52 languages.',
        'Analysis' : 'Analysis of',
        'AnalysisText' : 'feeling from the audio',
        'AnalysisP' : 'Find the most important moments in speech snippets, differentiate between positive and negative speeches, and make more assertive business decisions with deeper understanding.',
    },
    'pt': {
        'lead': 'Transforme falas em insights com nossa poderosa',
        'span': 'API de Inteligência Artificial.',
        'imageUrl': `${pt}`,
        'nav': {
            'solution': 'soluções',
            'clients': 'clientes',
            'pricing': 'preços',
            'contact': 'contato',
        },
        'description' : 'é um conjunto de APIs de conversão de fala em textos, bem como a interpretação do sentimento dominante nos dizeres. Nossa solução é treinada em mais de 500.000 horas de áudios, transcritos por humanos de uma ampla variedade de idades, nacionalidades, sotaques e níveis de instruções A API é comercializada no modelo SAAS (software as a service).',
        'audio': 'Transcrição de Áudio ',
        'Asynchronous': 'Assíncrono',
        'transcription': 'API de transcrição de voz assíncrona para áudio pré-gravado. Temos uma das melhores engines de reconhecimento de fala do mundo! O recurso speech-to-text assíncrono é um parceiro estratégico para o seu negócio. Esteja você extraindo insights de áudio ou transcrevendo conteúdo em escala.',
        'realTime': 'Transcrição de Áudio em',
        'time': 'tempo real',
        'timeText': 'O recurso live-speech-to-text de transcrição ao vivo possibilita o uso de legendas em tempo real para o seu negócio. Nossas legendas garantem que as palestras e treinamentos ao vivo sejam acessíveis e possam ser arquivadas para uso futuro.',
        'identification': 'Identificação de',
        'identificationText': ' idiomas em áudios.',
        'identificationG': 'Obtendo fala e insights a nível global. Nossa solução tem suporte a 52 idiomas. ',
        'Analysis' : 'Análise de',
        'AnalysisText' : 'sentimento a partir do áudio',
        'AnalysisP' : 'Encontre os momentos mais importantes em trechos de falas, diferencie falas positivas e negativas e tome decisões de negócios mais assertivas com uma compreensão mais profunda.',
    },
    'es': {
        'lead': 'Convierta sus discursos en ideas con nuestro poderoso',
        'span': 'API de Inteligencia Artificial.',
        'imageUrl': `${es}`,
        'nav': {
            'solution': 'soluciones',
            'clients': 'clientes',
            'pricing': 'precios',
            'contact': 'contacto',
        },
        'description' : 'es un conjunto de API para convertir voz en textos, así como para interpretar el sentimiento dominante en las palabras. Nuestra solución está entrenada en más de 500.000 horas de audio, transcritas por humanos de una amplia variedad de edades, nacionalidades, acentos y niveles de instrucción. La API se vende bajo el modelo SAAS (software como servicio).',
        'audio': 'Transcripción de audio',
        'Asynchronous': 'Asincrónico',
        'transcription': 'API de transcripción de voz asincrónica para audio pregrabado. ¡Tenemos uno de los mejores motores de reconocimiento de voz del mundo! La función de voz a texto asíncrona es un socio estratégico para su negocio. Ya sea que esté extrayendo información del audio o transcribiendo contenido a escala.',
        'realTime': 'Transcripción de audio en',
        'time': 'tiempo real',
        'timeText': 'La función de transcripción en vivo de voz a texto permite utilizar subtítulos en tiempo real para su negocio. Nuestros subtítulos garantizan que las conferencias y capacitaciones en vivo sean accesibles y puedan archivarse para uso futuro.',
        'identification': 'Identificación de',
        'identificationText': 'idiomas en audios.',
        'identificationG': 'Obtener conversaciones e ideas globales. Nuestra solución admite 52 idiomas.',
        'Analysis' : 'Análisis de',
        'AnalysisText' : 'sentimiento del audio',
        'AnalysisP' : 'Encuentre los momentos más importantes en fragmentos de discursos, diferencie entre discursos positivos y negativos y tome decisiones comerciales más asertivas con una comprensión más profunda.',
    },
};

function changeLanguage() {
    var selectElement = document.getElementById("language-select");
    var selectedLanguage = selectElement.value;
    var img = document.getElementById("translate"); 


    document.getElementById("lead").innerHTML = `${contents[selectedLanguage].lead} <br><span >${contents[selectedLanguage].span}</span>` ;
    img.src = contents[selectedLanguage].imageUrl;
    solution.innerText = contents[selectedLanguage].nav.solution;
    clients.innerText = contents[selectedLanguage].nav.clients;
    prices.innerText = contents[selectedLanguage].nav.pricing;
    contact.innerText = contents[selectedLanguage].nav.contact;
    description.innerHTML = `<span class="highlights">CheckSpeech AI</span> ${contents[selectedLanguage].description}`;

    title.innerText = contents[selectedLanguage].nav.solution;
    audio.innerHTML = `${contents[selectedLanguage].audio}<span class="highlights"> ${contents[selectedLanguage].Asynchronous}</span>`;
    audioText.innerText = contents[selectedLanguage].transcription;

    realTime.innerHTML = `${contents[selectedLanguage].realTime} <span class="highlights">${contents[selectedLanguage].time}</span>`;
    timeText.innerText = contents[selectedLanguage].timeText;

    identification.innerHTML = `${contents[selectedLanguage].identification} <span class="highlights">${contents[selectedLanguage].identificationText}</span>`;
    identificationGlobal.innerText = contents[selectedLanguage].identificationG;
    analysis.innerHTML = `${contents[selectedLanguage].Analysis} <span class="highlights"> ${contents[selectedLanguage].AnalysisText}</span>`;
    analysisP.innerText =  contents[selectedLanguage].AnalysisP;
}

changeLanguage();