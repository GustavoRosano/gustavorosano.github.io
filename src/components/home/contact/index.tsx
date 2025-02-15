import React, { useState } from 'react';
import styles from '../../../styles/Home/contact.module.css';
import Image from 'next/image';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import Github from '../../../assets/svg/github.svg';
import Linkedin from '../../../assets/svg/linkedin.svg';
import Whatsapp from '../../../assets/svg/whatsapp.svg';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const sendWhatsAppMessage = () => {
        if (!name || !message || !email) {
            alert("Por favor, preencha todos os campos antes de enviar.");
            return;
        }
    
        const phoneNumber = "5511988672712"; 
        const text = `Olá, sou o ${name},\n\n${message}.\n\n*Meu e-mail é:* ${email}.`;
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    
        window.open(url, '_blank', 'noopener,noreferrer');
    };
    
    const sendEmail = () => {
        if (!name || !message || !email) {
            alert("Por favor, preencha todos os campos antes de enviar.");
            return;
        }
    
        const subject = "Interesse em seus serviços";
        const body = `Olá Gustavo!\n\nMeu nome é ${name},\n\n${message}\n\nCaso seja possível, gostaria de discutir mais detalhes sobre isso. Você pode me responder por e-mail ou, se preferir, podemos marcar uma conversa.\n\nMeus contatos:\nE-mail: ${email}\n\nAguardo seu retorno.\n\nAtenciosamente,\n${name}.`;
    
        const mailtoLink = `mailto:seuemail@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
        window.open(mailtoLink, '_blank', 'noopener,noreferrer');
    };

    return (
        <div id='contato' className={styles.contact}>
            <div className={styles.contactContainer}>
                <h2 className={styles.title}>Entre em contato e vamos criar algo incrível!</h2>
                <p className={styles.text}>
                    Estou sempre aberto a novas oportunidades e projetos desafiadores. 
                    Sinta-se à vontade para me enviar uma mensagem!
                </p>
                <div className={styles.contactForm}>
                    <Box
                        component="form"
                        sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                        noValidate
                        autoComplete="off"
                        className={styles.formaContainer}
                    >
                        <TextField
                            label="Digite seu nome"
                            variant="outlined"
                            className={styles.input}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': { borderColor: '#FFF' },
                                    '&:hover fieldset': { borderColor: '#FFF' },
                                    '&.Mui-focused fieldset': { borderColor: '#FF' },
                                },
                                '& .MuiInputLabel-root': { color: '#FFF' },
                                '& .MuiInputLabel-root.Mui-focused': { color: '#FFF' },
                                '& .MuiOutlinedInput-input': { color: '#FFF' },
                            }}
                        />

                        <TextField
                            label="Digite seu e-mail"
                            variant="outlined"
                            className={styles.input}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': { borderColor: '#FFF' },
                                    '&:hover fieldset': { borderColor: '#FFF' },
                                    '&.Mui-focused fieldset': { borderColor: '#FF' },
                                },
                                '& .MuiInputLabel-root': { color: '#FFF' },
                                '& .MuiInputLabel-root.Mui-focused': { color: '#FFF' },
                                '& .MuiOutlinedInput-input': { color: '#FFF' },
                            }}
                        />

                        <TextField
                            label="Mensagem"
                            multiline
                            rows={4}
                            className={styles.input}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': { borderColor: '#FFF' },
                                    '&:hover fieldset': { borderColor: '#FFF' },
                                    '&.Mui-focused fieldset': { borderColor: '#FF' },
                                },
                                '& .MuiInputLabel-root': { color: '#FFF' },
                                '& .MuiInputLabel-root.Mui-focused': { color: '#FFF' },
                                '& .MuiOutlinedInput-input': { color: '#FFF' },
                            }}
                        />

                        <div className={styles.formButtons}>
                            <button 
                                type="button" 
                                className={styles.whatsappButton} 
                                onClick={sendWhatsAppMessage}
                            >
                                Enviar por WhatsApp
                            </button>
                            <button 
                                type="button" 
                                className={styles.mailButton}
                                onClick={sendEmail}
                            >
                                Enviar por E-mail
                            </button>
                        </div>
                    </Box>

                    <div className={`${styles.socialMedia} ${styles.socialMediaMobile}`}>
                        <a href="https://github.com/GustavoRosano" target="_blank" rel="noopener noreferrer">
                            <Image src={Github} alt="GitHub" className={styles.socialMediaIcon} />
                        </a>
                        <a href="https://www.linkedin.com/in/gustavo-rosano/" target="_blank" rel="noopener noreferrer">
                            <Image src={Linkedin} alt="LinkedIn" className={styles.socialMediaIcon} />
                        </a>
                        <a href="https://wa.me/5511988672712" target="_blank" rel="noopener noreferrer">
                            <Image src={Whatsapp} alt="WhatsApp" className={styles.socialMediaIcon} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
