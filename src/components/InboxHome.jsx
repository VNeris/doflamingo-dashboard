import React, { useState } from 'react';

const InboxHome = () => {
    // Exemplo de dados fictícios
    const conversations = [
        {
            id: 1,
            sender: 'Monkey D. Luffy',
            subject: 'Plano para encontrar o One Piece',
            preview: 'Precisamos nos encontrar para discutir o próximo movimento...',
            messages: [
                { id: 1, sender: 'Luffy', color: "#d42a5b", content: 'Vamos nos encontrar na ilha próxima!' },
                { id: 2, sender: 'Você', content: 'Estou a caminho!' },
            ],
        },
        {
            id: 2,
            sender: 'Roronoa Zoro',
            subject: 'Treino de espadas',
            preview: 'Você pode me ajudar a treinar?',
            messages: [
                { id: 1, sender: 'Zoro', content: 'Vamos treinar mais forte amanhã!' },
                { id: 2, sender: 'Você', content: 'Combinado!' },
            ],
        },
    ];

    const [selectedConversation, setSelectedConversation] = useState(null);

    const handleConversationClick = (conversation) => {
        setSelectedConversation(conversation);
    };

    return (
        <div className="flex my-6 rounded-sm w-full">
            {/* Lista de conversas */}
            <div className="w-1/3 bg-zinc-100 text-pink-600 border-r">
                <h2 className="text-xl p-4 border-b font-semibold">Inbox</h2>
                <ul>
                    {conversations.map((conversation) => (
                        <li
                            key={conversation.id}
                            className="p-4 cursor-pointer hover:bg-gray-200"
                            onClick={() => handleConversationClick(conversation)}
                        >
                            <h3 className="font-bold">{conversation.sender}</h3>
                            <p className="text-sm text-black">{conversation.subject}</p>
                            <p className="text-xs text-black">{conversation.preview}</p>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Área de mensagens */}
            <div className="w-2/3 bg-white">
                {selectedConversation ? (
                    <div>
                        <h2 className="text-xl p-4 text-pink-600 border-b font-semibold flex gap-2">
                            {selectedConversation.sender}<span className="text-black"> - {selectedConversation.subject}</span>
                        </h2>
                        <div className="p-4">
                            {selectedConversation.messages.map((message) => (
                                <div key={message.id} className="mb-4">
                                    <p className="text-lg font-semibold text-pink-600">{message.sender}</p>
                                    <p className="text-md text-black">{message.content}</p>
                                </div>
                            ))}
                        </div>
                            <input type="text" className='ms-2 border-2 rounded-full p-1 ps-2 top-[560px] w-[600px] relative' placeholder='Mensagem' />
                    </div>
                ) : (
                    <div className="p-4">Selecione uma conversa para visualizar.</div>
                )}
            </div>
        </div>
    );
};

export default InboxHome;
