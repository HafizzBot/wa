/*
HAI KAK SAYA Aprilia YANG PUNYA SC)
SAYA YANZ BOT (RECORD)
SAYA INGIN MEMBERIKAN SCRIPT BOT WA
SEMOGA BERMANFAAT

THANKS TO
• MHANKBARBAR (LORD MASTAH)
• ARIFI RAZZAQ (MASTAH)
• SENKU (MASTAH)
• ARDY (MASTAH)
• FINX (MASTAH)
• DINATA (MASTAH)+(MY GURU)
• Aprilia (NEWBIE)
• ALDI FAUZI (GURU YANZ BOT)
• Yanz Bot (NEWBIE)
• PENYEDIA MODULE
• PENYEDIA REST API'S

NOTE : KALO MAU COLONG CASE JANGAN SETENGAH-SETENGAH KASIHIN //CASE BY Yanz Bot GITU
*/
const {
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   generateWAMessage,
	generateWAMessageFromContent,
   processTime,
} = require('@adiwajshing/baileys')
const { color, bgcolor } = require('./lib/color')
const { help } = require('./src/help')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { fetchJson, fetchText } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const { mediafireDl } = require('./lib/mediafire.js')
const { rules } = require('./lib/rules') 
const { yta, porno, ytv, igdl, upload, formatDate } = require('./lib/ytdl')
const { webp2gifFile, igDownloader, TiktokDownloader } = require("./lib/gif.js")
const { donasi } = require('./lib/donasi')
const yts = require( 'yt-search')
const { pinterest } = require('./lib/pinterest')
const { iklan } = require('./lib/iklan')
const fs = require('fs')
const moment = require('moment-timezone')
const axios = require('axios')
const figlet = require('figlet')
const { exec } = require('child_process')
const fetch = require('node-fetch')
const hx = require('hxz-api')
//const tiktod = require('tiktok-scraper')
const ffmpeg = require('fluent-ffmpeg')
const { removeBackgroundFromImageFile } = require('remove.bg')
const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const nsfw = JSON.parse(fs.readFileSync('./src/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./src/simi.json'))
const setting = JSON.parse(fs.readFileSync('./src/settings.json'))
const ban = JSON.parse(fs.readFileSync('./database/banned.json'))
let _scommand = JSON.parse(fs.readFileSync("./database/scommand.json"));
owner = setting.ownerNumber
namabot = setting.namabot
namaowner = setting.ownerName
fake = setting.fake
let hit_today = []; //JAN UBAH
const thumb = fs.readFileSync("./media/fake.jpg");
const thumb2 = fs.readFileSync("./media/logo.jpg");
blocked = []
//setting owner disini juga
ownerName = 'BotOwner';
ownerNumber = '6285850666419';
a = '```';
banChats = false;
prefixStatus = false;
//finish

function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
          if(time2 < "23:59:00"){
          var ucapanWaktu = 'GoodNigh🌌'
}
          if(time2 < "19:00:00"){
          var ucapanWaktu = 'GooodEvening🌆'
}
          if(time2 < "18:00:00"){
          var ucapanWaktu = 'GoodEvening🌇'
}
          if(time2 < "15:00:00"){
          var ucapanWaktu = 'GoodAfternoon🏞'
}
          if(time2 < "11:00:00"){
          var ucapanWaktu = 'GoodMoorning🌅'
}
          if(time2 < "05:00:00"){
          var ucapanWaktu = 'GoodNight🏙'
}
// Jngan di ubah ya takut erorr
async function starts() {
	const YANZ = new WAConnection()
	YANZ.logger.level = "warn"
	YANZ.version = [2, 2143, 6]
	YANZ.browserDescription = ["YANZ BOT", "Chrome", "3.0"];
	console.log('')
	console.log(color(figlet.textSync('      BOT WEA', {
	font: 'Bloody',
	horizontalLayout: 'default',
	vertivalLayout: 'default',
    whitespaceBreak: false
	}), 'cyan'))    
    console.log(color(figlet.textSync('                  YANZ BOT', {
    font: 'Standard',
    horizontalLayout: 'default',
    vertivalLayout: 'default',
    width: 80,
    whitespaceBreak: false
	}), 'cyan'))
	YANZ.on('qr', () => {
		YANZ.sendMessage(`6285883359262@s.whatsapp.net`, `「 BOT CONNECT 」\n\n${a}Hallo Kak!! Saya ${setting.ownerName} Izin Menggunakan Bot Ini!!${a}\n\n${a}BOT TERSAMBUNG PADA${a}\n${a}${time2}${a}\n\n${a}PROFILE${a}\n*Nama* : ${setting.ownerName}\n*Nomor* : ${setting.ownerNumber}\n*Status* : Online\n\n${a}TERIMAKASIH KAK YANZ🥰!!${a}`, MessageType.extendedText)
		console.log(color('[','white'), color('!','red'), color(']','white'), color('Scan QRnya Cepet'))
	})

	fs.existsSync('./YanzBot.json') && YANZ.loadAuthInfo('./YanzBot.json')
	YANZ.on('connecting', () => {
		start('2', 'Menyambungkan')
	})
	//pembatas cintaku pada mu🥴
	//JANGAN DI UBAH YA BWANG TAKUT EROR BY YANZ BOT👇
    YANZ.on('open', () => {
    success('2', 'Dah Connect Tuhh!!')
    console.log(color('','aqua'), color(`||================================================||`, "cyan"))
    console.log(color(' ||> ','cyan'), color(`     Hallo Kak ${setting.ownerName} ${ucapanWaktu}`, 'cyan'))
    console.log(color(' ||> ','cyan'), color('    Jangan Lupa Subscrib Yt YANZ BOT🥰', 'cyan'))
    console.log(color(' ||> ','cyan'), color('   Script Ori By Yanz Bot recode By Yanz Bot🥴', 'cyan'))
    console.log(color('','aqua'), color(`||================================================||`, "cyan"))
    console.log(color('','aqua'), color(`THANK FOR`, "cyan"))
    console.log(color(' ➪ ','cyan'), color('YANZ BOT'))
    console.log(color(' ➪ ','cyan'), color('ALDI FAUZI (GURU YANZ BOT)', 'cyan'))
    console.log(color(' ➪ ','cyan'), color('FEBZABOT', 'cyan'))
    console.log(color(' ➪ ','cyan'), color('DIKA ARDNT', 'cyan'))
    console.log(color(' ➪ ','cyan'), color('MUZA BOT', 'cyan'))
    console.log(color(' ➪ ','cyan'), color('MHANKBARBAR (BASE)', 'cyan'))
    console.log(color(' ➪ ','cyan'), color('VINZ DEV', 'cyan'))
    console.log(color(' ➪ ','cyan'), color('APRILIA (SC ORI)', 'cyan'))
    console.log(color(' ➪ ','cyan'), color(`DAN PARA PENGGUNA BOT`, "cyan"))
    start('2','')
	})
	await YANZ.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./YanzBot.json', JSON.stringify(YANZ.base64EncodedAuthInfo(), null, '\t'))
//pembatas cintak ku pada mu 🥴
	YANZ.on("CB:Call", json => {
		let call;
		calling = JSON.parse(JSON.stringify(json))
		call = calling[1].from
		setTimeout(function(){
			YANZ.sendMessage(call, 'Maaf, saya tidak bisa menerima panggilan. nelfon = block!.\nJika ingin membuka block harap chat Owner!!', MessageType.text)
			.then(() => YANZ.blockUser(call, "add"))
			}, 100);
		})
		
		YANZ.on("group-participants-update", async (anu) => {
    try {
      groupMet = await YANZ.groupMetadata(anu.jid);
      groupMembers = groupMet.participants;
      groupAdmins = getGroupAdmins(groupMembers);
      mem = anu.participants[0];

      console.log(anu);
      try {
        pp_user = await YANZ.getProfilePicture(mem);
      } catch (e) {
        pp_user =
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
      }
      try {
        pp_grup = await YANZ.getProfilePicture(anu.jid);
      } catch (e) {
        pp_grup =
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
      }
      if (anu.action == "add" && mem.includes(YANZ.user.jid)) {
        YANZ.sendMessage(anu.jid, "Minasankon'nichiwa ㋛︎", "conversation");
      }
hehe = await getBuffer(pp_user)
if (anu.action == 'add' && !mem.includes(YANZ.user.jid)) {
             const mdata = await YANZ.groupMetadata(anu.jid)
             
             const memeg = mdata.participants.length
             const thu = await YANZ.getStatus(anu.participants[0], MessageType.text)
             const num = anu.participants[0]
             const bosco1 = await YANZ.prepareMessage("0@s.whatsapp.net", hehe, MessageType.location,{ thumbnail: hehe})
			 const bosco2 = bosco1.message["ephemeralMessage"] ? bosco1.message.ephemeralMessage : bosco1
                let v = YANZ.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = v.vname || v.notify || num.split('@')[0]
                time_welc = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
                time_wel = moment.tz('Asia/Kolkata').format("hh:mm")
                teks = `🌿 *KONNICHIWA* @${num.split('@')[0]}\n🌿 *Bɪᴏ* : *${thu.status}*\n🌿 *Mᴇᴍʙᴇʀs : ${memeg}*\n🌿 *Wᴇʟᴄᴏᴍᴇ Tᴏ* \n *${mdata.subject}*\n*Subscribe My Channel*\n*https://bit.ly/3mLKMjo*\n🌿 *Dᴏɴᴛ Fᴏʀɢᴇᴛ Dɪsᴄʀɪᴘᴛɪᴏɴ* \n *${mdata.desc}*\n ${time_wel} -  ${time_welc}`
                welcomeBut = [{buttonId:`#owner`,buttonText:{displayText:'OWNER'},type:1}, {buttonId:`bebantot`,buttonText:{displayText:'KONNICHIWA BEBAN'},type:1}]
                welcomeButt = { contentText: ` `, footerText: `${teks}`, buttons: welcomeBut, headerType: 6, locationMessage: bosco2.message.locationMessage}
                YANZ.sendMessage(mdata.id, welcomeButt, MessageType.buttonsMessage, { caption: 'hehe', "contextInfo": { "mentionedJid" : [num], },})
                 }
            if (anu.action == 'remove' && !mem.includes(YANZ.user.jid)) {
                const mdata = await YANZ.groupMetadata(anu.jid)
                const num = anu.participants[0]
                const bosco3 = await YANZ.prepareMessage("0@s.whatsapp.net", hehe, MessageType.location,{ thumbnail: hehe})
			    const bosco4 = bosco3.message["ephemeralMessage"] ? bosco3.message.ephemeralMessage : bosco3
                let w = YANZ.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = w.vname || w.notify || num.split('@')[0]
                time_welc = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
                time_wel = moment.tz('Asia/Kolkata').format("hh:mm")
                memeg = mdata.participants.length
                out = `*Sayonara Bʀᴏᴛʜᴇʀ* 👋\n@${num.split('@')[0]}\n *Leaving From* : *${mdata.subject}*\n *Rᴇsᴛ Nᴏᴡ Pᴇᴀᴄᴇ* \n${time_wel} -  ${time_welc}`
                goodbyeBut = [{buttonId:`#h`,buttonText:{displayText:'Sayonara Beban👋'}, type:1}]
                goodbyeButt = { contentText: ` `, footerText: `${out}`, buttons: goodbyeBut, headerType: 6, locationMessage: bosco3.message.locationMessage}
                YANZ.sendMessage(mdata.id, goodbyeButt, MessageType.buttonsMessage, { caption: 'hehe', "contextInfo": { "mentionedJid" : [num], },})
                  }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})

	YANZ.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})
	const getCmd = (id) => {
  let position = null;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      position = i;
    }
  });
  if (position !== null) {
    return _scommand[position].chats;
  }
};  

	YANZ.on('chat-update', async (mek) => {
		try {
            if (!mek.hasNewMessage) return
            mek = mek.messages.all()[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const apiKey = setting.apiKey // contact me on whatsapp wa.me/6285883359262
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			var prefixRegEx = /^[!&z?=#.+\/]/gi;
    let _chats =
      type === "conversation" && mek.message.conversation
        ? mek.message.conversation
        : type == "imageMessage" && mek.message.imageMessage.caption
        ? mek.message.imageMessage.caption
        : type == "videoMessage" && mek.message.videoMessage.caption
        ? mek.message.videoMessage.caption
        : type == "extendedTextMessage" && mek.message.extendedTextMessage.text
        ? mek.message.extendedTextMessage.text
        : type == "buttonsResponseMessage" && mek.message[type].selectedButtonId
        ? mek.message[type].selectedButtonId
        : type == "stickerMessage" &&
          getCmd(mek.message[type].fileSha256.toString("base64")) !== null &&
          getCmd(mek.message[type].fileSha256.toString("base64")) !== undefined
        ? getCmd(mek.message[type].fileSha256.toString("base64"))
        : "";
    let prefix = _chats.match(prefixRegEx) ? prefixRegEx.exec(_chats)[0] : "";
    body =
      type === "conversation" && mek.message.conversation.startsWith(prefix)
        ? mek.message.conversation
        : type == "imageMessage" &&
          mek.message.imageMessage.caption.startsWith(prefix)
        ? mek.message.imageMessage.caption
        : type == "videoMessage" &&
          mek.message.videoMessage.caption.startsWith(prefix)
        ? mek.message.videoMessage.caption
        : type == "locationMessage" &&
          mek.message.locationMessage.caption.startsWith(prefix)
        ? mek.message.locationMessage
        : type == "extendedTextMessage" &&
          mek.message.extendedTextMessage.text.startsWith(prefix)
        ? mek.message.extendedTextMessage.text
        : "";
budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
    let chats = _chats.match(prefixRegEx)
      ? _chats
          .split(prefixRegEx)
          .find((v) => v === _chats.replace(prefixRegEx, ""))
      : _chats;
      
const fakegroup = (teks) => {
      YANZ.sendMessage(from, teks, text, {
        quoted: {
          key: {
            fromMe: false,
            participant: `0@s.whatsapp.net`,
            ...(from ? { remoteJid: "6285883359262-1604595598@g.us" } : {}),
          },
          message: {
            imageMessage: {
              url: "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
              mimetype: "image/jpeg",
              caption: fake,
              fileSha256: "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
              fileLength: "28777",
              height: 1080,
              width: 1079,
              mediaKey: "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
              fileEncSha256: "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
              directPath:
                "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
              mediaKeyTimestamp: "1610993486",
              jpegThumbnail: fs.readFileSync("./media/logo.jpg"),
              scansSidecar:
                "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw==",
            },
          },
        },
      });
    };      
 let command = chats.split(/ +/g)[0];
    hit_today.push(command);
    const args = _chats.trim().split(/ +/).slice(1);
    const commander = body.slice(1).trim().split(/ +/).shift().toLowerCase()
    const arg = budy.slice(commander.length + 2, budy.length)
    const isCmd = _chats.match(prefixRegEx)
      ? prefixRegEx.exec(_chats)["input"]
      : _chats;
    const q = args.join(" ");

			mess = {
				wait: 'Proses sabar',
				banned: 'anda sudah terbanned, mohon hubungi owner untuk membuka banned',
				success: 'jadi tuh',
				error: {
					stick: 'Gagal, terjadi kesalahan saat mengkonversi gambar ke sticker',
					api: 'COBA BEBERAPA SAAT LAGI',
					Iv: 'Link tidak valid'
				},
				only: {
					group: 'Perintah ini hanya bisa di gunakan dalam group!',
					ownerG: 'Perintah ini hanya bisa di gunakan oleh owner group!',
					ownerB: 'Perintah ini hanya bisa di gunakan oleh owner bot!',
					admin: 'Perintah ini hanya bisa di gunakan oleh admin group!',
					Badmin: 'Perintah ini hanya bisa di gunakan ketika bot menjadi admin!'
				}
			}
			// const isSelfNumber = config.NomorSELF
    // const isOwner = sender.id === isSelfNumber
    resbutx = (type === 'listResponseMessage') ? mek.message.listResponseMessage.selectedDisplayText : ''

			const botNumber = YANZ.user.jid
			const ownerNumber = [`${owner}@s.whatsapp.net`] // replace this with your number
			const isGroup = from.endsWith('@g.us')
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			pushname = YANZ.contacts[sender] != undefined ? YANZ.contacts[sender].vname || YANZ.contacts[sender].notify : undefined
			const groupMetadata = isGroup ? await YANZ.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBanned = ban.includes(sender)
			const isAntilink = isGroup ? antilink.includes(from) : false
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				YANZ.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				YANZ.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? YANZ.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : YANZ.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
		  if (budy.includes("https://chat.whatsapp.com/")) {
				if (!isGroup) return
				if (!isAntilink) return
				if (isGroupAdmins) return
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply(` *「 GROUP LINK DETECTOR 」*\nKamu mengirimkan link grup chat, maaf kamu di kick dari grup :(`)
				setTimeout(() => {
				YANZ.groupRemove(from, [kic]).catch((e) => { reply(`BOT HARUS JADI ADMIN`) })
				}, 0)
			    }
			
			//buat fakereply
            var ase = new Date();
                        var waktoonyabro = ase.getHours();
                        switch(waktoonyabro){
                case 0: waktoonyabro = `Selamat Malam ${pushname}ðŸŒ›`; break;
                case 1: waktoonyabro = `Selamat Malam ${pushname}ðŸŒ›`; break;
                case 2: waktoonyabro = `Selamat Malam ${pushname}ðŸŒ›`; break;
                case 3: waktoonyabro = `Selamat Pagi ${pushname}âœ¨`; break;
                case 4: waktoonyabro = `Selamat Pagi ${pushname}âœ¨`; break;
                case 5: waktoonyabro = `Selamat Pagi ${pushname}âœ¨`; break;
                case 6: waktoonyabro = `Selamat Pagi ${pushname}âœ¨`; break;
                case 7: waktoonyabro = `Selamat Pagi ${pushname}âœ¨`; break;
                case 8: waktoonyabro = `Selamat Pagi ${pushname}âœ¨`; break;
                case 9: waktoonyabro = `Selamat Pagi ${pushname}âœ¨`; break;
                case 10: waktoonyabro = `Selamat Pagi ${pushname}âœ¨`; break;
                case 11: waktoonyabro = `Selamat Siang ${pushname}ðŸ”¥`; break;
                case 12: waktoonyabro = `Selamat Siang ${pushname}ðŸ”¥`; break;
                case 13: waktoonyabro = `Selamat Siang ${pushname}ðŸ”¥`; break;
                case 14: waktoonyabro = `Selamat Siang ${pushname}ðŸ”¥`; break;
                case 15: waktoonyabro = `Selamat Sore ${pushname}ðŸŒ¹`; break;
                case 16: waktoonyabro = `Selamat Sore ${pushname}ðŸŒ¹`; break;
                case 17: waktoonyabro = `Selamat Sore ${pushname}ðŸŒ¹`; break;
                case 18: waktoonyabro = `Selamat Malam ${pushname}ðŸŒ›`; break;
                case 19: waktoonyabro = `Selamat Malam ${pushname}ðŸŒ›`; break;
                case 20: waktoonyabro = `Selamat Malam ${pushname}ðŸŒ›`; break;
                case 21: waktoonyabro = `Selamat Malam ${pushname}ðŸŒ›`; break;
                case 22: waktoonyabro = `Selamat Malam ${pushname}ðŸŒ›`; break;
                case 23: waktoonyabro = `Selamat Malam ${pushname}ðŸŒ›`; break;
            }
            var ucapansalam = '' + waktoonyabro;
            //BUTTON
            const sendButImage = async (
      id,
      text1,
      desc1,
      gam1,
      but = [],
      options = {}
    ) => {
      kma = gam1;
      mhan = await YANZ.prepareMessage(from, kma, image);
      const buttonMessages = {
        imageMessage: mhan.message.imageMessage,
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 4,
      };
      YANZ.sendMessage(
        id,
        buttonMessages,
        MessageType.buttonsMessage,
        options
      );
    };
    const sendButVideo = async (
      id,
      text1,
      desc1,
      gam1,
      but = [],
      options = {}
    ) => {
      kma = gam1;
      mhan = await YANZ.prepareMessage(from, kma, video);
      const buttonMessages = {
        videoMessage: mhan.message.videoMessage,
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 4,
      };
      YANZ.sendMessage(
        id,
        buttonMessages,
        MessageType.buttonsMessage,
        options
      );
    };
    //button lokasi Yanz Bot
const sendButloc = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await YANZ.prepareMessage(from, kma, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
YANZ.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
    const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
      const buttonMessage = {
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 1,
      };
      YANZ.sendMessage(
        id,
        buttonMessage,
        MessageType.buttonsMessage,
        options
      );
    };
			if (budy == 'p') {

                reply(`Ya, Ada Yang Bisa Saya Bantu? Kalo Bingung Ketik ${prefix}menu Ya Kak`)

            }

            if (budy == 'P') {

                reply(`Ya, Ada Yang Bisa Saya Bantu? Kalo Bingung Ketik ${prefix}menu Ya Kak`)

            }

            if (budy == 'Bot') {

                kas4 = fs.readFileSync('./src/audio/bot.mp3')
               YANZ.sendMessage(from, kas4, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})

            }

            if (budy == 'bot') {
                reply(`Ya, Emng Gw bot ngapa? mau ngajak by one lu😒`)

            }


            if (budy == 'assalamualaikum') {

				reply(` وَعَلَيْكُمُ السَّلاَمُ \nAda Yang Bisa Saya Bantu? kalo Bingung Ketik ${prefix}menu Ya Kak`)

			}
			
			if (budy == 'mastah') {

				reply(`Waw Ada Mastah Ampun Mastah`)

			}
			
			if (budy == 'Mastah') {

				reply(`Waw Ada Mastah Ampun Mastah`)

			}

			if (budy == 'Assalamualaikum') {

				reply(`Waalaikumsalam, Ada Yang Bisa Saya Bantu? kalo Bingung Ketik ${prefix}menu Ya Kak`)

			}

			if (budy == 'Terimakasih') {

				reply(`Sama sama, Semoga Harimu Menyenangkan :)`)

			}

			if (budy == 'terimakasih') {

				reply(`Sama sama, Semoga Harimu Menyenangkan :)`)

			}

			if (budy == 'makasih') {

				reply(`Sama sama, Semoga Harimu Menyenangkan :)`)

			}

			if (budy == 'Thanks') {

				reply(`Sama sama, Semoga Harimu Menyenangkan :)`)

			}

			if (budy == 'thanks') {

				reply(`Sama sama, Semoga Harimu Menyenangkan :)`)

			}

			if (budy == 'Tq') {

				reply(`Sama sama, Semoga Harimu Menyenangkan :)`)

			}

			if (budy == 'tq') {

				reply(`Sama sama, Semoga Harimu Menyenangkan :)`)

			}
			/******************************* AUTO *******************************/
function clockString(ms) {
      let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000);
      let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60;
      let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60;
      return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
    }        
let settingstatus = 0;
    if (new Date() * 1 - settingstatus > 1000) {
      let _uptime = process.uptime() * 1000;
      let uptime = clockString(_uptime);
      await YANZ.setStatus(`Aktif selama ${uptime} | spam/vc/telfon?block | Sewa Bot Only |By Yanz Bot🗿`).catch((_) => _);
      settingstatus = new Date() * 1;
    }

			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			let authorname = YANZ.contacts[from] != undefined ? YANZ.contacts[from].vname || YANZ.contacts[from].notify : undefined	
			if (authorname != undefined) { } else { authorname = `Yanz Bot` }	
			
			function addMetadata(packname, author) {	
				if (!packname) packname = 'YANZ BOT'; if (!author) author = 'Yanz Bot';	
				author = author.replace(/[^a-zA-Z0-9]/g, '');	
				let name = `${author}_${packname}`
				if (fs.existsSync(`./src/stickers/${name}.exif`)) return `./src/stickers/${name}.exif`
				const json = {	
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author,
				}
				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

				let len = JSON.stringify(json).length	
				let last	

				if (len > 256) {	
					len = len - 256	
					bytes.unshift(0x01)	
				} else {	
					bytes.unshift(0x00)	
				}	

				if (len < 16) {	
					last = len.toString(16)	
					last = "0" + len	
				} else {	
					last = len.toString(16)	
				}	

				const buf2 = Buffer.from(last, "hex")	
				const buf3 = Buffer.from(bytes)	
				const buf4 = Buffer.from(JSON.stringify(json))	

				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

				fs.writeFile(`./src/stickers/${name}.exif`, buffer, (err) => {	
					return `./src/stickers/${name}.exif`	
				})	

			}
			
			const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    YANZ.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }   
            const sendMediaURL2 = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    YANZ.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }   
			const sendFileFromUrl = async(link, type, options) => {
      hasil = await getBuffer(link)
	YANZ.sendMessage(from, hasil, type, options).catch(e => {
	fetch(link).then((hasil) => {
	YANZ.sendMessage(from, hasil, type, options).catch(e => {
	YANZ.sendMessage(from, { url : link }, type, options).catch(e => {
	  reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
	  console.log(e)
	})
	})
	})
	})
	}
			switch(command) {
				case 'menu':
				case 'help':
				var menu = `${ucapansalam}
				Semoga harimu menyenangkan
				
INFO CREATOR BOT
*Nama : Yanz Bot*
*Instagram : ahmadhafizz4040*
*YouTube : -*
*Link Yt : -*
*WhatsApp : wa.me/6285850666419*

-----------------------------------•

INFO BOT
*Nama Bot : ${namabot}*
*Author : Yanz Bot*
*Base : Mhankbarbar*
*Library : Bailey*
*Prefix : 「 ${prefixStatus ? "Multi Prefix" : "No Prefix"} 」*
*Nama Owner : ${namaowner}*
*Owner Number : ${owner}*

------------------------------------•

_*LIST MENU YANZ BOT*_

_${prefix}allmenu_
_${prefix}groupmenu_
_${prefix}othermenu_
_${prefix}bokepmenu_
_${prefix}menuislam_
_${prefix}soundmenu_
_${prefix}makermenu_
_${prefix}primbonmenu_
_${prefix}downloadmenu_
_${prefix}dosamenu_
_${prefix}asupanmenu_
_${prefix}ownermenu_

_*SIMPLE MENU YANZ BOT DI ATAS*_

*UMUM*
_${prefix}donasi_
_${prefix}sewabot_
_${prefix}owner_
_${prefix}creator_
_${prefix}rules_
_${prefix}iklan_
_${prefix}sc_

*THANKS TO*
• MHANKBARBAR (LORD MASTAH)
• ARIFI RAZZAQ (MASTAH)
• SENKU (MASTAH)
• ARDY (MASTAH)
• FINX (MASTAH)
• DINATA (MASTAH)
• APRILIA (SC ORI)
• YANZ BOT (NEWBIE)
• ALDI FAUZI (GURU YANZ BOT)
• DIKA ARDNT (MASTAH MD)
• FEBZABOT (MASTAH)
• MUZA BOT (MASTAH)
• PENYEDIA MODULE
• PENYEDIA REST API'S
`
sendButImage(from, menu, fake, thumb2, [
{buttonId: `${prefix}allmenu`, buttonText: {displayText: '𝙰𝙻𝙻 𝙼𝙴𝙽𝚄:'},type: 1},
{buttonId: `${prefix}rules`, buttonText: {displayText: '𝚁𝚄𝙻𝙴𝚂 𝙱𝙾𝚃'},type: 1},
{buttonId: `${prefix}donasi`, buttonText: {displayText: '𝙳𝙾𝙽𝙰𝚂𝙸'},type: 1}
]);
break
case 'allmenu':
var menu =`
${ucapansalam}
SEMOGA HARIMU MENYENANGKAN

-----------------------------------•

INFO CREATOR BOT
*Nama : Yanz Bot*
*Instagram : ahmadhafizz4040*
*YouTube : -*
*Link Yt : -
*WhatsApp : wa.me/6285850666419*

-----------------------------------•

INFO BOT
*Nama Bot : ${namabot}*
*Author : Yanz Bot*
*Base : Mhankbarbar*
*Library : Bailey*
*Nama Owner : ${namaowner}*
*Owner Number : wa.me/${owner}*

------------------------------------•

_*LIST ALL MENU YANZ BOT*_

*•UMUM*

_${prefix}donasi_
_${prefix}sewabot_
_${prefix}owner_
_${prefix}creator_
_${prefix}rules_
_${prefix}iklan_
_${prefix}sc_
_${prefix}setprefix_
_${prefix}mode_

*•GROUP MENU*

_${prefix}welcome_
_${prefix}antilink_
_${prefix}promote_
_${prefix}demote_
_${prefix}kick_
_${prefix}headshot_
_${prefix}leave_
_${prefix}linkgroup_
_${prefix}listadmin_
_${prefix}ganteng_
_${prefix}cantik_
_${prefix}jadian_
_${prefix}fitnah_
_${prefix}add_
_${prefix}setpp_
_${prefix}tagall_
_${prefix}hidetag_
_${prefix}block_
_${prefix}unblock_
_${prefix}delete_
_${prefix}seberapagay_
_${prefix}hobby_
_${prefix}rate_
_${prefix}jelek_
_${prefix}goblok_
_${prefix}bego_
_${prefix}pinter_
_${prefix}jago_
_${prefix}nolep_
_${prefix}monyet_
_${prefix}babi_
_${prefix}beban_
_${prefix}baik_
_${prefix}jahat_
_${prefix}anjing_
_${prefix}haram_
_${prefix}kontol_
_${prefix}pakboy_
_${prefix}pakgirl_
_${prefix}wibu_
_${prefix}hebat_
_${prefix}sadboy_
_${prefix}sadgirl_
_${prefix}group_

*•MAKER MENU*

_${prefix}aovlogo_
_${prefix}warface_
_${prefix}warface2_
_${prefix}dotalogo_
_${prefix}overwatch_
_${prefix}cslogo_
_${prefix}neon_
_${prefix}neon2_
_${prefix}neon3_
_${prefix}rainbow_
_${prefix}rainbow2_
_${prefix}gradasi_
_${prefix}watermelon_
_${prefix}matrix_
_${prefix}silktext_
_${prefix}darkmetal_
_${prefix}candytext_
_${prefix}glowtext_
_${prefix}kamuflase_
_${prefix}underfalltext_
_${prefix}summertext_
_${prefix}summertext2_
_${prefix}goldenroses_
_${prefix}underwater_
_${prefix}naturetext_
_${prefix}wolftext_
_${prefix}woodentext_
_${prefix}woodhearttext_
_${prefix}cuptext_
_${prefix}hearttext_
_${prefix}undertext_
_${prefix}lovetext_
_${prefix}pappertext_
_${prefix}romantistext_
_${prefix}textcup_
_${prefix}shadowtext_
_${prefix}battlefield_
_${prefix}glitch_
_${prefix}amerikalogo_
_${prefix}grafitytext_
_${prefix}narutobanner_

*•SOUND MENU*

_${prefix}iri_
_${prefix}desah_
_${prefix}nengdesah_
_${prefix}pale_
_${prefix}playdate_
_${prefix}beb_
_${prefix}hallo_
_${prefix}megic_
_${prefix}susu_
_${prefix}cemen_
_${prefix}menyukaiku_
_${prefix}gatal_
_${prefix}sasageyo_
_${prefix}sound_
_${prefix}sound1_
_${prefix}sound2_
_${prefix}sound3_
_${prefix}sound4_
_${prefix}sound5_
_${prefix}sound6_
_${prefix}sound7_
_${prefix}sound8_
_${prefix}sound9_
_${prefix}sound10_
_${prefix}sound11_
_${prefix}sound12_
_${prefix}sound13_
_${prefix}sound14_
_${prefix}sound15_
_${prefix}sound16_
_${prefix}sound17_
_${prefix}sound18_
_${prefix}sound19_
_${prefix}sound20_
_${prefix}sound21_
_${prefix}sound22_
_${prefix}sound23_
_${prefix}sound24_
_${prefix}sound25_
_${prefix}sound26_
_${prefix}sound27_
_${prefix}sound28_
_${prefix}sound29_
_${prefix}sound30_
_${prefix}sound31_
_${prefix}sound32_
_${prefix}sound33_
_${prefix}sound34_
_${prefix}sound35_
_${prefix}sound36_
_${prefix}sound37_
_${prefix}sound38_
_${prefix}sound39_
_${prefix}sound40_
_${prefix}sound41_
_${prefix}sound42_
_${prefix}sound43_
_${prefix}sound44_
_${prefix}sound45_
_${prefix}sound46_
_${prefix}sound47_
_${prefix}sound48_
_${prefix}sound49_
_${prefix}sound50_
_${prefix}sound51_
_${prefix}sound52_
_${prefix}sound53_
_${prefix}sound54_
_${prefix}sound55_
_${prefix}sound56_
_${prefix}sound57_
_${prefix}sound58_
_${prefix}sound59_
_${prefix}sound60_
_${prefix}sound61_
_${prefix}sound62_
_${prefix}sound63_
_${prefix}sound64_
_${prefix}sound65_
_${prefix}sound66_
_${prefix}sound67_
_${prefix}sound68_

*•DOWNLOAD MENU*

_${prefix}tiktok_
_${prefix}play_
_${prefix}ytmp3_
_${prefix}ytmp4_
_${prefix}igdl_
_${prefix}mediafire_
_${prefix}facebook_

*•OTHER MENU*

_${prefix}tourl_
_${prefix}ssweb_
_${prefix}pinterest_
_${prefix}infogempa_
_${prefix}infocovid_

*•OWNER MENU*

_${prefix}bc_
_${prefix}bc2_
_${prefix}bcgc_
_${prefix}buggc_
_${prefix}hacked_
_${prefix}ban_
_${prefix}unban_
_${prefix}block_
_${prefix}unblock_
_${prefix}setppbot_
_${prefix}clearall_
_${prefix}kickall_
_${prefix}setprefix_
_${prefix}mode_

*•MENU ISLAM*

_${prefix}ayatkursi_
_${prefix}kisahnabi_

*•BOKEP MENU*

_${prefix}bokep1_
_${prefix}bokep2_
_${prefix}bokep3_
_${prefix}bokep4_
_${prefix}bokep5_
_${prefix}bokep6_
_${prefix}bokep7_
_${prefix}bokep8_
_${prefix}bokep9_
_${prefix}bokep10_
_${prefix}bokep11_
_${prefix}bokep12_
_${prefix}bokep13_
_${prefix}bokep14_
_${prefix}bokep15_
_${prefix}bokep16_
_${prefix}bokep17_
_${prefix}bokep18_
_${prefix}bokep19_
_${prefix}bokep20_
_${prefix}bokep21_
_${prefix}bokep22_
_${prefix}bokep23_
_${prefix}bokep24_

*•UP STORY*
_${prefix}upswteks_
_${prefix}upswimage_
_${prefix}upswvideo_
_${prefix}upswvoice_
_${prefix}upswaudio_
_${prefix}upswlokasi_
_${prefix}upswsticker_

*•DOSA MENU*

_${prefix}hentai_
_${prefix}anal_
_${prefix}futanari_
_${prefix}yuri_
_${prefix}nekoh_
_${prefix}pussy_
_${prefix}ass_
_${prefix}ahegao_
_${prefix}blowjob_
_${prefix}bdsm_
_${prefix}cuckold_
_${prefix}cum_
_${prefix}ero_
_${prefix}femdom_
_${prefix}foot_
_${prefix}gangbang_
_${prefix}glasses_
_${prefix}jahy_
_${prefix}masturbation_
_${prefix}orgy_
_${prefix}panties_
_${prefix}pussy_
_${prefix}things_

*•STIKER MENU*

_${prefix}stiker_
_${prefix}sgif_
_${prefix}attp_
_${prefix}ttp_
_${prefix}smeme_

*THANKS TO*
• MHANKBARBAR (LORD MASTAH)
• ARIFI RAZZAQ (MASTAH)
• SENKU (MASTAH)
• ARDY (MASTAH)
• FINX (MASTAH)
• DINATA (MASTAH)
• APRILIA (SC ORI)
• YANZ BOT (NEWBIE)
• ALDI FAUZI (GURU YANZ BOT)
• DIKA ARDNT (MASTAH MD)
• FEBZABOT (MASTAH)
• MUZA BOT (MASTAH)
• PENYEDIA MODULE
• PENYEDIA REST API'S
`
sendButImage(from, menu, fake, thumb, [
{buttonId: `${prefix}owner`, buttonText: {displayText: '𝙾𝚆𝙽𝙴𝚁'},type: 1},
{buttonId: `${prefix}sewabot`, buttonText: {displayText: '𝚂𝙴𝚆𝙰 𝙱𝙾𝚃'},type: 1},
{buttonId: `${prefix}donasi`, buttonText: {displayText: '𝙳𝙾𝙽𝙰𝚂𝙸'},type: 1}
]);
break
case 'bebantot':
                reply(`*JANGAN GITU LU*\n*SESAMA BEBAN HARUS SALING*\n*HINA*`)
                break
case 'rules':
teks = `*Syarat & Ketentuan ${namabot}*\n1. Teks dan nama pengguna WhatsApp anda kami simpan di dalam server selama bot aktif.\n2. Data anda akan di hapus ketika bot offline.\n3. Kami tidak menyimpan gambar, video, file, audio, dan dokumen yang anda kirim.\n4. Kami tidak pernah meminta anda untuk memberikan informasi pribadi.\n5. Jika menemukan Bug/Error silahkan langsung lapor ke Owner bot.\n6. Cukup perintah 1x jika bot tidak merespon harap ulangi kembali, Jika di ulangi kembali tidak merespon, Bot tidak aktif\n7. Dilarang spam, Share virus virtex, Telpon, Video call, Kami akan blockir anda.\n8. Apapun yang anda perintah pada bot ini, *KAMI TIDAK BERTANGGUNG JAWAB!*\n\nTERIMA KASIH !~`
reply(teks)
break
//IKY GANS
case 'iklan':
case 'sewabot':
             if (isBanned) return reply(mess.bannad)
             var wew = fs.readFileSync(`./media/qr.jpg`)
				var tres = `
╭━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙
│ *「 INFO BOT 」*
│➛*Nama Bot* : ${namabot}
│➛*Versi* : 1.0.0
│➛*Creator* : Prii
│➛*Youtube* : YANZ BOT
╰┬────────────┈ ⳹
   │ *「HARGA SEWA 」* 
   │➛ *1 BULAN* : 10K
   │➛ *2 BULAN* : 15K
   │➛ *4 BULAN* : 25K
   │ *「HARGA SCRIPT 」* 
   │➛ *HARGA SC INI* : NANTI GW UP YT
   │➛ *CARA BIKIN BOT* : DI YT BANYAK
   ╰─────────────┈ ⳹
    HUB: wa.me/${owner}
    Wm Yanz Bot`
    YANZ.sendMessage(from, wew, image, { quoted: mek, caption: tres })
    break
case "setprefix":
        if (!isOwner && !mek.key.fromMe) return reply(mess.own)
        sendButMessage(
          from,
          `PREFIX : ${prefixStatus ? "Multi Prefix" : "No Prefix"}`,
          `Silahkan pilih salah satu`,
          [
            {
              buttonId: `${prefix}noprefix`,
              buttonText: {
                displayText: `NOPREFIX`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}multiprefix`,
              buttonText: {
                displayText: `MULTIPREFIX`,
              },
              type: 1,
            },
          ]
        );
        break;
case "noprefix":
        if (!isOwner && !mek.key.fromMe) return reply(mess.own)
        if (prefixStatus == false) return reply("No prefix is recently on!");
        prefixStatus = false;
        reply("Berhasil mengganti prefix menjadi noprefix");
        break;
      case "multiprefix":
        if (!isOwner && !mek.key.fromMe) return reply(mess.own)
        if (prefixStatus == true) return reply("Multi prefix is recently on!");
        prefixStatus = true;
        reply("Berhasil mengganti prefix menjadi multiprefix");
        break;
case "mode":
        if (!isOwner && !mek.key.fromMe) return reply(mess.own)
        sendButMessage(from, `MODE SELF/PUBLIC`, `Silahkan pilih salah satu`, [
          {
            buttonId: `${prefix}self`,
            buttonText: {
              displayText: `SELF MODE`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}public`,
            buttonText: {
              displayText: `PUBLIC MODE`,
            },
            type: 1,
          },
        ]);
        break;
case "public":
        if (!isOwner && !mek.key.fromMe) return reply(mess.own)
        if (banChats === false) return;
        // var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
        banChats = false;
        reply(`「 *PUBLIC-MODE* 」`);
        break;
      case "self":
        if (!isOwner && !mek.key.fromMe) return reply(mess.own)
        if (banChats === true) return;
        uptime = process.uptime();
        // var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
        banChats = true;
        reply(`「 *SELF-MODE* 」`);
        break;
        case "upswteks":
        if (!isOwner && !mek.key.fromMe) return reply(mess.own)    
        if (!q) return reply("Isi teksnya!");
        YANZ.sendMessage("status@broadcast", `${q}`, extendedText);
        fakegroup(`Sukses Up story wea teks ${q}`);
        break;
        case "upswlokasi":
          if (!isOwner && !mek.key.fromMe) return reply(mess.own)    
  if (args.length < 1) return reply('Teksnya?')
                    teks = body.slice(12)
                    YANZ.sendMessage('status@broadcast', {degreesLatitude: 24.121231, degreesLongitude: 55.1121221, name:teks,address:`${NamaBot}`}, MessageType.location)
                    reply(`Sukses upload lokasi:\n${teks}`)
                    break;
        case "upswsticker":
                    if (!isOwner && !mek.key.fromMe) return reply(mess.own)    
if (!isQuotedSticker) return reply('Reply stikernya!')
if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await YANZ.downloadMediaMessage(encmedia)
						YANZ.sendMessage('status@broadcast', buff, sticker)
						}
						reply(`Sukses upload sticker`)
                    break
                     case "upswaudio":
                    
if (!isQuotedAudio) return reply('Reply audionya!')
if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await YANZ.downloadMediaMessage(encmedia)
						YANZ.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400})
						}
						reply(`Sukses upload audio`)
						break
						case "upswvoice":
                    
if (!isQuotedAudio) return reply('Reply audionya!')
if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await YANZ.downloadMediaMessage(encmedia)
						YANZ.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt: true})
						}
						reply(`Sukses upload voice`)
						break
      case "upswimage":
        if (isQuotedImage) {
          const swsw = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          cihcih = await YANZ.downloadMediaMessage(swsw);
          YANZ.sendMessage("status@broadcast", cihcih, image, {
            caption: `${q}`,
          });
          bur = `Sukses Upload Story Image dengan Caption: ${q}`;
          YANZ.sendMessage(from, bur, text, { quoted: mek });
        } else {
          reply("Reply gambarnya!");
        }
        break;
      case "upswvideo":
        if (isQuotedVideo) {
          const swsw = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          cihcih = await YANZ.downloadMediaMessage(swsw);
          YANZ.sendMessage("status@broadcast", cihcih, video, {
            caption: `${q}`,
          });
          bur = `Sukses Upload Story Video dengan Caption: ${q}`;
          YANZ.sendMessage(from, bur, text, { quoted: mek });
        } else {
          reply("reply videonya!");
        }
        break;

case 'sc':
ngontol = `SCNYA ESKRIM BANG`
reply (ngontol)
break
case 'donasi':
case 'donate':
var wew = fs.readFileSync(`./media/qr.jpg`)
var tres = `
*HAI KAK MAU BENERAN DONASI ATAU TIDAK KAK*
*SEMOGA TIDAK DILIHAT DOANG*

*BUAT YANG UDH PREMIUM*
*DANA : ${setting.dana}*
*GOPAY : ${setting.gopay}*
*OVO : ${setting.ovo}*

*BUAT YANG BELUM SCAN QR DIATAS*
*MAKASIH KAK*
*LOVE YOU😋*
`
YANZ.sendMessage(from, wew, image, { quoted: mek, caption: tres })
    break
/*_____________________________MAKER MENU_________________________*/
case 'dotalogo':
             if (isBanned) return reply (mess.banned)
             if (args.length == 0) return reply (`Example : ${prefix + command} Yanz Bot`)
             reply(mess.wait)
             anu = await fetchJson(`https://photo-oxy.herokuapp.com/api/dota_effect?text=${args.join(' ')}`)
             buffer = await getBuffer (anu.url)
             YANZ.sendMessage(from, buffer, image, {quoted: mek, caption: mess.success})
             break
case 'grafitytext':
           if (isBanned) return reply (mess.banned)
           if (args.length == 0) return reply (`Example : ${prefix + command} Yanz Bot`)
           reply (mess.wait)
           anu = await fetchJson (`https://photo-oxy.herokuapp.com/api/grafity_text?text=${args.join(' ')}`)
           buffer = await getBuffer (anu.url)
           YANZ.sendMessage(from, buffer, image, {quoted: mek, caption: mess.success})
             break
case 'narutobanner':
             if (isBanned) return reply (mess.banned)
             if (args.length == 0) return reply (`Example : ${prefix + command} Yanz Bot`)
             reply(mess.wait)
             anu = await fetchJson(`https://photo-oxy.herokuapp.com/api/naruto?text=${args.join(' ')}`)
             buffer = await getBuffer (anu.url)
             YANZ.sendMessage(from, buffer, image, {quoted: mek, caption: mess.success})
             break
case 'amerikalogo':
			if (isBanned) return reply(mess.banned)
					var gh = body.slice(13)
					var gli = gh.split("&")[0];
					var tch = gh.split("&")[1];
					if (args.length < 1) return reply(`Example: ${prefix + command} Yanz Bot&Aprii`)
					reply(mess.wait)
					anu = await fetchJson(`https://photo-oxy.herokuapp.com/api/captain_america?text=${gli}&text2=${tch}`)
					buffer = await getBuffer(anu.url)
					YANZ.sendMessage(from, buffer, image, {quoted: mek, caption: mess.success})
					break 
case 'glitch':
			if (isBanned) return reply(mess.banned)
					var gh = body.slice(8)
					var gli = gh.split("&")[0];
					var tch = gh.split("&")[1];
					if (args.length < 1) return reply(`Example: ${prefix + command} Yanz Bot&Aprii`)
					reply(mess.wait)
					anu = await fetchJson(`https://photo-oxy.herokuapp.com/api/tiktok_text?text=${gli}&text2=${tch}`)
					buffer = await getBuffer(anu.url)
					YANZ.sendMessage(from, buffer, image, {quoted: mek, caption: mess.success})
					break 
case 'battlefield':
             if (isBanned) return reply (mess.banned)
             var gh = body.slice(13)
             var apri = gh.split("&")[0];
             var lia = gh.split("&")[1];
              if (args.length < 1) return reply(`Example: ${prefix + command} Yanz Bot&Aprii`)
			  reply(mess.wait)
			  anu = await fetchJson(`https://photo-oxy.herokuapp.com/api/battlefield?text=${apri}&text2=${lia}`)
			  buffer = await getBuffer(anu.url)
			  YANZ.sendMessage(from, buffer, image, {quoted: mek, caption: mess.success})
		      break 
					case 'shadowtext':
             if (isBanned) return reply (mess.banned)
             if (args.length == 0) return reply (`Example : ${prefix + command} Yanz Bot`)
             reply(mess.wait)
             anu = await fetchJson(`https://photo-oxy.herokuapp.com/api/shadow?text=${args.join(' ')}`)
             buffer = await getBuffer (anu.url)
             YANZ.sendMessage(from, buffer, image, {quoted: mek, caption: mess.success})
             break
case 'textcup':
             if (isBanned) return reply (mess.banned)
             if (args.length == 0) return reply (`Example : ${prefix + command} Yanz Bot`)
             reply(mess.wait)
             anu = await fetchJson(`https://photo-oxy.herokuapp.com/api/text_cup?text=${args.join(' ')}`)
             buffer = await getBuffer (anu.url)
             YANZ.sendMessage(from, buffer, image, {quoted: mek, caption: mess.success})
             break
case 'romantistext':
             if (isBanned) return reply (mess.banned)
             if (args.length == 0) return reply (`Example : ${prefix + command} Yanz Bot`)
             reply(mess.wait)
             anu = await fetchJson(`https://photo-oxy.herokuapp.com/api/romantic_message?text=${args.join(' ')}`)
             buffer = await getBuffer (anu.url)
             YANZ.sendMessage(from, buffer, image, {quoted: mek, caption: mess.success})
             break
case 'pappertext':
             if (isBanned) return reply (mess.banned)
             if (args.length == 0) return reply (`Example : ${prefix + command} Yanz Bot`)
             reply(mess.wait)
             anu = await fetchJson(`https://photo-oxy.herokuapp.com/api/burn_papper?text=${args.join(' ')}`)
             buffer = await getBuffer (anu.url)
             YANZ.sendMessage(from, buffer, image, {quoted: mek, caption: mess.success})
             break
case 'lovetext':
             if (isBanned) return reply (mess.banned)
             if (args.length == 0) return reply (`Example : ${prefix + command} Yanz Bot`)
             reply(mess.wait)
             anu = await fetchJson(`https://photo-oxy.herokuapp.com/api/love_message?text=${args.join(' ')}`)
             buffer = await getBuffer (anu.url)
             YANZ.sendMessage(from, buffer, image, {quoted: mek, caption: mess.success})
             break
case 'undertext':
             if (isBanned) return reply (mess.banned)
             if (args.length == 0) return reply (`Example : ${prefix + command} Yanz Bot`)
             reply(mess.wait)
             anu = await fetchJson(`https://photo-oxy.herokuapp.com/api/under_grass?text=${args.join(' ')}`)
             buffer = await getBuffer (anu.url)
             YANZ.sendMessage(from, buffer, image, {quoted: mek, caption: mess.success})
             break
case 'hearttext':
             if (isBanned) return reply (mess.banned)
             if (args.length == 0) return reply (`Example : ${prefix + command} Yanz Bot`)
             reply(mess.wait)
             anu = await fetchJson(`https://photo-oxy.herokuapp.com/api/duoble_heart?text=${args.join(' ')}`)
             buffer = await getBuffer (anu.url)
             YANZ.sendMessage(from, buffer, image, {quoted: mek, caption: mess.success})
             break
case 'cuptext':
             if (isBanned) return reply (mess.banned)
             if (args.length == 0) return reply (`Example : ${prefix + command} Yanz Bot`)
             reply(mess.wait)
             anu = await fetchJson(`https://photo-oxy.herokuapp.com/api/coffe_cup?text=${args.join(' ')}`)
             buffer = await getBuffer (anu.url)
             YANZ.sendMessage(from, buffer, image, {quoted: mek, caption: mess.success})
             break
case 'woodhearttext':
             if (isBanned) return reply (mess.banned)
             if (args.length == 0) return reply (`Example : ${prefix + command} Yanz Bot`)
             reply(mess.wait)
             anu = await fetchJson(`https://photo-oxy.herokuapp.com/api/wood_heart?text=${args.join(' ')}`)
             buffer = await getBuffer (anu.url)
             YANZ.sendMessage(from, buffer, image, {quoted: mek, caption: mess.success})
             break
case 'woodentext':
             if (isBanned) return reply (mess.banned)
             if (args.length == 0) return reply (`Example : ${prefix + command} Yanz Bot`)
             reply(mess.wait)
             anu = await fetchJson(`https://photo-oxy.herokuapp.com/api/wooden_heart?text=${args.join(' ')}`)
             buffer = await getBuffer (anu.url)
             YANZ.sendMessage(from, buffer, image, {quoted: mek, caption: mess.success})
             break
case 'summertext':
             if (isBanned) return reply (mess.banned)
             if (args.length == 0) return reply (`Example : ${prefix + command} Yanz Bot`)
             reply(mess.wait)
             anu = await fetchJson(`https://photo-oxy.herokuapp.com/api/td_summer?text=${args.join(' ')}`)
             buffer = await getBuffer (anu.url)
             YANZ.sendMessage(from, buffer, image, {quoted: mek, caption: mess.success})
             break
case 'wolftext':
             if (isBanned) return reply (mess.banned)
             if (args.length == 0) return reply (`Example : ${prefix + command} Yanz Bot`)
             reply(mess.wait)
             anu = await fetchJson(`https://photo-oxy.herokuapp.com/api/wolf_metal?text=${args.join(' ')}`)
             buffer = await getBuffer (anu.url)
             YANZ.sendMessage(from, buffer, image, {quoted: mek, caption: mess.success})
             break
case 'naturetext':
             if (isBanned) return reply (mess.banned)
             if (args.length == 0) return reply (`Example : ${prefix + command} Yanz Bot`)
             reply(mess.wait)
             anu = await fetchJson(`https://photo-oxy.herokuapp.com/api/td_nature?text=${args.join(' ')}`)
             buffer = await getBuffer (anu.url)
             YANZ.sendMessage(from, buffer, image, {quoted: mek, caption: mess.success})
             break
case 'underwater':
             if (isBanned) return reply (mess.banned)
             if (args.length == 0) return reply (`Example : ${prefix + command} Yanz Bot`)
             reply(mess.wait)
             anu = await fetchJson(`https://photo-oxy.herokuapp.com/api/under_water?text=${args.join(' ')}`)
             buffer = await getBuffer (anu.url)
             YANZ.sendMessage(from, buffer, image, {quoted: mek, caption: mess.success})
             break
case 'goldenroses':
             if (isBanned) return reply (mess.banned)
             if (args.length == 0) return reply (`Example : ${prefix + command} Yanz Bot`)
             reply(mess.wait)
             anu = await fetchJson(`https://photo-oxy.herokuapp.com/api/golden_roses?text=${args.join(' ')}`)
             buffer = await getBuffer (anu.url)
             YANZ.sendMessage(from, buffer, image, {quoted: mek, caption: mess.success})
             break
case 'summertext2':
             if (isBanned) return reply (mess.banned)
             if (args.length == 0) return reply (`Example : ${prefix + command} Yanz Bot`)
             reply(mess.wait)
             anu = await fetchJson(`https://photo-oxy.herokuapp.com/api/summer_nature?text=${args.join(' ')}`)
             buffer = await getBuffer (anu.url)
             YANZ.sendMessage(from, buffer, image, {quoted: mek, caption: mess.success})
             break
case 'underfalltext':
             if (isBanned) return reply (mess.banned)
             if (args.length == 0) return reply (`Example : ${prefix + command} Yanz Bot`)
             reply(mess.wait)
             anu = await fetchJson(`https://photo-oxy.herokuapp.com/api/under_fall?text=${args.join(' ')}`)
             buffer = await getBuffer (anu.url)
             YANZ.sendMessage(from, buffer, image, {quoted: mek, caption: mess.success})
             break
case 'neon':
             if (isBanned) return reply (mess.banned)
             if (args.length == 0) return reply (`Example : ${prefix + command} Yanz Bot`)
             reply(mess.wait)
             anu = await fetchJson(`https://photo-oxy.herokuapp.com/api/glowing_neon?text=${args.join(' ')}`)
             buffer = await getBuffer (anu.url)
             YANZ.sendMessage(from, buffer, image, {quoted: mek, caption: mess.success})
             break
case 'rainbow':
             if (isBanned) return reply (mess.banned)
             if (args.length == 0) return reply (`Example : ${prefix + command} Yanz Bot`)
             reply(mess.wait)
             anu = await fetchJson(`https://photo-oxy.herokuapp.com/api/rainbow_shine?text=${args.join(' ')}`)
             buffer = await getBuffer (anu.url)
             YANZ.sendMessage(from, buffer, image, {quoted: mek, caption: mess.success})
             break
case 'kamuflase':
             if (isBanned) return reply (mess.banned)
             if (args.length == 0) return reply (`Example : ${prefix + command} Yanz Bot`)
             reply(mess.wait)
             anu = await fetchJson(`https://photo-oxy.herokuapp.com/api/camouflage_fabric?text=${args.join(' ')}`)
             buffer = await getBuffer (anu.url)
             YANZ.sendMessage(from, buffer, image, {quoted: mek, caption: mess.success})
             break
case 'glowtext':
             if (isBanned) return reply (mess.banned)
             if (args.length == 0) return reply (`Example : ${prefix + command} Yanz Bot`)
             reply(mess.wait)
             anu = await fetchJson(`https://photo-oxy.herokuapp.com/api/td_glowing?text=${args.join(' ')}`)
             buffer = await getBuffer (anu.url)
             YANZ.sendMessage(from, buffer, image, {quoted: mek, caption: mess.success})
             break
case 'candytext':
             if (isBanned) return reply (mess.banned)
             if (args.length == 0) return reply (`Example : ${prefix + command} Yanz Bot`)
             reply(mess.wait)
             anu = await fetchJson(`https://photo-oxy.herokuapp.com/api/candy_text?text=${args.join(' ')}`)
             buffer = await getBuffer (anu.url)
             YANZ.sendMessage(from, buffer, image, {quoted: mek, caption: mess.success})
             break
case 'darkmetal':
             if (isBanned) return reply (mess.banned)
             if (args.length == 0) return reply (`Example : ${prefix + command} Yanz Bot`)
             reply(mess.wait)
             anu = await fetchJson(`https://photo-oxy.herokuapp.com/api/dark_metal?text=${args.join(' ')}`)
             buffer = await getBuffer (anu.url)
             YANZ.sendMessage(from, buffer, image, {quoted: mek, caption: mess.success})
             break
case 'neon2':
             if (isBanned) return reply (mess.banned)
             if (args.length == 0) return reply (`Example : ${prefix + command} Yanz Bot`)
             reply(mess.wait)
             anu = await fetchJson(`https://photo-oxy.herokuapp.com/api/party_neon?text=${args.join(' ')}`)
             buffer = await getBuffer (anu.url)
             YANZ.sendMessage(from, buffer, image, {quoted: mek, caption: mess.success})
             break
case 'silktext':
             if (isBanned) return reply (mess.banned)
             if (args.length == 0) return reply (`Example : ${prefix + command} Yanz Bot`)
             reply(mess.wait)
             anu = await fetchJson(`https://photo-oxy.herokuapp.com/api/text_on_silk?text=${args.join(' ')}`)
             buffer = await getBuffer (anu.url)
             YANZ.sendMessage(from, buffer, image, {quoted: mek, caption: mess.success})
             break
case 'neon3':
             if (isBanned) return reply (mess.banned)
             if (args.length == 0) return reply (`Example : ${prefix + command} Yanz Bot`)
             reply(mess.wait)
             anu = await fetchJson(`https://photo-oxy.herokuapp.com/api/light_neon?text=${args.join(' ')}`)
             buffer = await getBuffer (anu.url)
             YANZ.sendMessage(from, buffer, image, {quoted: mek, caption: mess.success})
             break
case 'matrix':
             if (isBanned) return reply (mess.banned)
             if (args.length == 0) return reply (`Example : ${prefix + command} Yanz Bot`)
             reply(mess.wait)
             anu = await fetchJson(`https://photo-oxy.herokuapp.com/api/matrix_effect?text=${args.join(' ')}`)
             buffer = await getBuffer (anu.url)
             YANZ.sendMessage(from, buffer, image, {quoted: mek, caption: mess.success})
             break
case 'watermelon':
             if (isBanned) return reply (mess.banned)
             if (args.length == 0) return reply (`Example : ${prefix + command} Yanz Bot`)
             reply(mess.wait)
             anu = await fetchJson(`https://photo-oxy.herokuapp.com/api/watermelon?text=${args.join(' ')}`)
             buffer = await getBuffer (anu.url)
             YANZ.sendMessage(from, buffer, image, {quoted: mek, caption: mess.success})
             break
case 'gradasi':
             if (isBanned) return reply (mess.banned)
             if (args.length == 0) return reply (`Example : ${prefix + command} Yanz Bot`)
             reply(mess.wait)
             anu = await fetchJson(`https://photo-oxy.herokuapp.com/api/gradient_text?text=${args.join(' ')}`)
             buffer = await getBuffer (anu.url)
             YANZ.sendMessage(from, buffer, image, {quoted: mek, caption: mess.success})
             break
case 'rainbow2':
             if (isBanned) return reply (mess.banned)
             if (args.length == 0) return reply (`Example : ${prefix + command} Yanz Bot`)
             reply(mess.wait)
             anu = await fetchJson(`https://photo-oxy.herokuapp.com/api/glow_rainbow?text=${args.join(' ')}`)
             buffer = await getBuffer (anu.url)
             YANZ.sendMessage(from, buffer, image, {quoted: mek, caption: mess.success})
             break
case 'cslogo':
             if (isBanned) return reply (mess.banned)
             if (args.length == 0) return reply (`Example : ${prefix + command} Yanz Bot`)
             reply(mess.wait)
             anu = await fetchJson(`https://photo-oxy.herokuapp.com/api/cs_go_effect?text=${args.join(' ')}`)
             buffer = await getBuffer (anu.url)
             YANZ.sendMessage(from, buffer, image, {quoted: mek, caption: mess.success})
             break
case 'overwatch':
             if (isBanned) return reply (mess.banned)
             if (args.length == 0) return reply (`Example : ${prefix + command} Yanz Bot`)
             reply(mess.wait)
             anu = await fetchJson(`https://photo-oxy.herokuapp.com/api/overwatch_effect?text=${args.join(' ')}`)
             buffer = await getBuffer (anu.url)
             YANZ.sendMessage(from, buffer, image, {quoted: mek, caption: mess.success})
             break
case 'warface':
             if (isBanned) return reply (mess.banned)
             if (args.length == 0) return reply (`Example : ${prefix + command} Yanz Bot`)
             reply(mess.wait)
             anu = await fetchJson(`https://photo-oxy.herokuapp.com/api/warface_effect?text=${args.join(' ')}`)
             buffer = await getBuffer (anu.url)
             YANZ.sendMessage(from, buffer, image, {quoted: mek, caption: mess.success})
             break
case 'warface2':
             if (isBanned) return reply (mess.banned)
             if (args.length == 0) return reply (`Example : ${prefix + command} Yanz Bot`)
             reply(mess.wait)
             anu = await fetchJson(`https://photo-oxy.herokuapp.com/api/warface_effect?text=${args.join(' ')}`)
             buffer = await getBuffer (anu.url)
             YANZ.sendMessage(from, buffer, image, {quoted: mek, caption: mess.success})
             break
case 'aovlogo':
             if (isBanned) return reply (mess.banned)
             if (args.length == 0) return reply (`Example : ${prefix + command} Yanz Bot`)
             reply(mess.wait)
             anu = await fetchJson(`https://photo-oxy.herokuapp.com/api/arena_of_valor?text=${args.join(' ')}`)
             buffer = await getBuffer (anu.url)
             YANZ.sendMessage(from, buffer, image, {quoted: mek, caption: mess.success})
             break
case 'facebook':
            if (!q) return reply('Linknya?')
            if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return reply(mess.Iv)
            reply(mess.wait)
            te = args.join(' ')
            hx.fbdown(`${te}`)
            .then(G => {
            ten = `${G.HD}`
            sendMediaURL(from,ten,`*Link video_normal* : ${G.Normal_video}`)
            })
            break    
case 'makermenu':
var menu =`
_*LIST MAKER MENU*_
_${prefix}aovlogo_
_${prefix}warface_
_${prefix}warface2_
_${prefix}dotalogo_
_${prefix}overwatch_
_${prefix}cslogo_
_${prefix}neon_
_${prefix}neon2_
_${prefix}neon3_
_${prefix}rainbow_
_${prefix}rainbow2_
_${prefix}gradasi_
_${prefix}watermelon_
_${prefix}matrix_
_${prefix}silktext_
_${prefix}darkmetal_
_${prefix}candytext_
_${prefix}glowtext_
_${prefix}kamuflase_
_${prefix}underfalltext_
_${prefix}summertext_
_${prefix}summertext2_
_${prefix}goldenroses_
_${prefix}underwater_
_${prefix}naturetext_
_${prefix}wolftext_
_${prefix}woodentext_
_${prefix}woodhearttext_
_${prefix}cuptext_
_${prefix}hearttext_
_${prefix}undertext_
_${prefix}lovetext_
_${prefix}pappertext_
_${prefix}romantistext_
_${prefix}textcup_
_${prefix}shadowtext_
_${prefix}battlefield_
_${prefix}glitch_
_${prefix}amerikalogo_
_${prefix}grafitytext_
_${prefix}narutobanner_
`
sendButMessage(from, menu, '_*BY YANZ BOT*_', [
{buttonId: `${prefix}owner`, buttonText: {displayText: 'OWNER BOT:)'}, type: 1},
{buttonId: `${prefix}donasi`, buttonText: {displayText: 'DONASI BOT ;)'}, type: 1}
]);
break
/*________________________________________BATAS MAKER________________________________________*/
/*________________________________________DOWNLOAD MENU________________________________________*/
case 'tiktok':
case 'tiktod':
//woi
if (isBanned) return reply (mess.banned)
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply('```Invalid link```')
ttw = await getBuffer('https://telegra.ph/file/93fd4cb214d27997aec65.jpg')
pnn =await YANZ.prepareMessage(from, ttw, image)
tete = [
{buttonId: `${prefix}tiktokwm ${args.join(' ')}`, buttonText: {displayText: 'WM'}, type: 1},
{buttonId: `${prefix}tiktoknowm ${args.join(' ')}`, buttonText: {displayText: 'NOWM'}, type: 1},
{buttonId: `${prefix}tiktokmusic ${args.join(' ')}`, buttonText: {displayText: 'MUSIC'}, type: 1}
]
ttbut = {
imageMessage: pnn.message.imageMessage,
contentText: `Hai Kak ${pushname} Bot Telah Menmekatkan Title Tersebut , Silahkan Pilih Tombol Akses Di Bawah`,
footerText: `_*© Hafiz Bot*_`,
buttons: tete,
headerType: 4
}
await YANZ.sendMessage(from, ttbut, MessageType.buttonsMessage, {quoted:mek})
break
case 'tiktoknowm':
//woi
if (isBanned) return reply (mess.banned)
reply(mess.wait)
anu = await fetchJson (`https://api-Yanz Bot-xyz.herokuapp.com/api/tiktok?url=${args.join(' ')}`)
buffer = await getBuffer (anu.result.nowm)
YANZ.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek, caption: 'SUBS YANZ BOT SU'})
break
case 'tiktokwm':
             if (!q) return reply('Linknya?')
             if (!q.includes('tiktok.com')) return reply(mess.error.Iv)
             reply(mess.wait)
             buffer = await getBuffer(`https://api.dapuhy.xyz/api/socialmedia/tiktokwithwm?url=${args.join(' ')}&apikey=B0ZTfKR00k`)
             YANZ.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek, caption: 'SUBS YANZ BOT SU'})
break
case 'tiktokmusic':
//woi
      if (isBanned) return reply (mess.banned)
reply(mess.wait)
anu = await fetchJson(`http://zekais-api.herokuapp.com/tiktokmusic?url=${args.join(' ')}&apikey=Rj9pGDhE`)
buffer = await getBuffer (anu.result)
YANZ.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: mek})
break
case 'ig':
case 'igdl':
        if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply(mess.eror.Iv)
        if (!q) return reply('Linknya?')
        reply(mess.wait)
	    hx.igdl(args[0])
	    .then(async(result) => {
            for(let i of result.medias){
                if(i.url.includes('mp4')){
                    let link = await getBuffer(i.url)
                    YANZ.sendMessage(from,link,video,{quoted: mek,caption: `Type : ${i.type}`})
                } else {
                    let link = await getBuffer(i.url)
                    YANZ.sendMessage(from,link,image,{quoted: mek,caption: `Type : ${i.type}`})                  
                }
            }
            });
	    break
case 'ytdl':
  case 'ytplay':
  case 'play':{
  if (isBanned) return reply(mess.banned)
  if (!q) return reply(`Example : ${prefix+command} query`)
  reply(mess.wait)
  res = await yts(q)
   if (Number(res.all[0].seconds) >= 3000) return reply(`Error! Ukuran File Terlalu Besar!!`)
  let thumbInfo = `*─ 「 YOUTUBE 」─*

*◯ Judul :* ${res.all[0].title}
*◯ Diupload :* ${res.all[0].ago}
*◯ Penonton :* ${res.all[0].views}
*◯ Durasi :* ${res.all[0].timestamp}
*◯ LINK :* ${res.all[0].url}
*◯ Deskripsi :* 
${res.all[0].description}`
 const gambra = (await YANZ.prepareMessageMedia({url:res.all[0].image},'imageMessage',{thumbnail:Buffer.alloc(0)})).imageMessage
const buttonsssok = [
  {buttonId:`${prefix}pleybuttonvideo ${res.all[0].url}`,buttonText:{displayText:'VIDEO '},type:1},
  {buttonId:`${prefix}pleybuttonaudio ${res.all[0].url}`,buttonText:{displayText:'AUDIO'},type:1}
  ]
  const ButtonsMessagees = {
  contentText: thumbInfo,
  buttons: buttonsssok,
  footerText: `Silahkan Pilih Jenis File Dibawah Ini`,
  headerType: 4,
  imageMessage: gambra
  }
  YANZ.sendMessage(from, ButtonsMessagees, MessageType.buttonsMessage, {quoted: mek})
  }
  break 
  case 'pleybuttonvideo':{
  if (isBanned) return reply(mess.banned)
  reply(mess.wait)
  let yut = await yts(q)
  ytv(yut.videos[0].url)
  .then((res) => {
  const { dl_link, thumb, title, filesizeF, filesize } = res
  axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
  .then((a) => {
  if (Number(filesize) >= 40000) return reply('FILE TERLALU BESAR!!!')
  sendFileFromUrl(dl_link, video, {mimetype: 'video/mp4',quoted:mek})
  })
  })
  }
break
case 'pleybuttonaudio':{
  if (isBanned) return reply(mess.banned)
  reply(mess.wait)
  let yut = await yts(q)
  yta(yut.videos[0].url)
  .then((res) => {
  const { dl_link, thumb, title, filesizeF, filesize } = res
  axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
  .then((a) => {
  if (Number(filesize) >= 40000) return reply('FILE TERLALU BESAR!!!')
  sendFileFromUrl(dl_link, audio, {mimetype: 'audio/mp4', quoted:mek})
  })
  })
  }
break
/*
case 'play':
if (isBanned) return reply (mess.banned)
if (args.length == 0) return reply (`Example : ${prefix + command} love nwantiti`)
anu = await fetchJson (`https://app-botpri.herokuapp.com/api/yt/playmp3?query=${args.join(' ')}&apikey=Fxc7`)
TITLE = `*TITLE BERHASIL DI DAPATKAN OLEH BOT*\n\nJudul : ${anu.title}\nChannel : ${anu.channel}\nUpload : ${anu.published}\nView : ${anu.views}\n\n*SILAHKAN PILIH DIBAWAH UNTUK MEDIA*`
ttw = await getBuffer(anu.thumb)
pnn =await YANZ.prepareMessage(from, ttw, image)
tete = [
{buttonId: `${prefix}yta ${args.join(' ')}`, buttonText: {displayText: 'AUDIO'}, type: 1},
{buttonId: `${prefix}ytv ${args.join(' ')}`, buttonText: {displayText: 'VIDEO'}, type: 1},
]
ttbut = {
imageMessage: pnn.message.imageMessage,
contentText: TITLE,
footerText: `_*© Hafiz Bot*_`,
buttons: tete,
headerType: 4
}
await YANZ.sendMessage(from, ttbut, MessageType.buttonsMessage, {quoted:mek})
break
case 'yta':
if (isBanned) return reply (mess.banned)
reply(mess.wait)
anu = await fetchJson (`https://app-botpri.herokuapp.com/api/yt/playmp3?query=${args.join(' ')}&apikey=Fxc7`)
buffer = await getBuffer (anu.url)
YANZ.sendMessage(from, buffer, audio, {mimetype: 'audio/mp3', quoted: mek})
break
case 'ytv':
if (isBanned) return reply (mess.banned)
reply(mess.wait)
anu = await fetchJson (`https://app-botpri.herokuapp.com/api/yt/playmp4?query=${args.join(' ')}&apikey=Fxc7`)
buffer = await getBuffer (anu.url)
YANZ.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek})
break
*/
  case 'playaudio': case 'ytplayaudio': case 'ytmusic': case 'ytaudio': case 'ytmp3': case 'playmp3':{
  if (isBanned) return reply(mess.banned)
  if (!q) return reply(`Example : ${prefix+command} query`)
  reply(mess.wait)
  res = await yts(q)
   if (Number(res.all[0].seconds) >= 3000) return reply(`Error! Ukuran File Terlalu Besar!!`)
  let thumbInfo = `*─ 「 YOUTUBE AUDIO 」─*

*◯ Judul :* ${res.all[0].title}
*◯ Diupload :* ${res.all[0].ago}
*◯ Penonton :* ${res.all[0].views}
*◯ Durasi :* ${res.all[0].timestamp}

*◯ Deskripsi :* 
${res.all[0].description}`
  const gambra = (await YANZ.prepareMessageMedia({url:res.all[0].image},'imageMessage',{thumbnail:Buffer.alloc(0)})).imageMessage
  const buttonsssok = [
 {buttonId: `${prefix}pleybuttonaudio ${q}`, buttonText: {displayText: `AUDIO`}, type: 1},
{buttonId: `${prefix}pleybuttondoc ${q}`, buttonText: {displayText: `DOCUMENT`}, type: 1},
{buttonId: `${prefix}pleybuttonvn ${q}`, buttonText: {displayText: `VOICE NOTE`}, type: 1}
  ]
  const ButtonsMessagees = {
  contentText: thumbInfo,
  buttons: buttonsssok,
  footerText: `Silahkan Pilih Jenis File Dibawah Ini`,
  headerType: 4,
  imageMessage: gambra
  }
  await YANZ.sendMessage(from, ButtonsMessagees, MessageType.buttonsMessage, {quoted : mek})
  }
break
case 'ytmp4':
//woi
if (isBanned) return reply (mess.banned)
if (args.length < 1) return reply("```LINK NYA?```")
if (!isUrl(args[0]) && !args[0].includes('youtu.be')) return reply('```LINK NYA JELEK NIH```')
reply (mess.wait)
anu = await fetchJson (`https://api.dapuhy.xyz/api/socialmedia/ytmp4?url=${args.join(' ')}&apikey=B0ZTfKR00k`)
captionnya = `TITLE BERHASIL DIDAPATKAN\n\nJudul : ${anu.result.title}\nSize : ${anu.result.size}\nKualitas Video : ${anu.result.quality}\nViews : ${anu.result.views}\nChannel : ${anu.result.channel}\nDeskripsi : ${anu.result.desc}\n\n*MOHON TUNGGU BEBERAPA MENIT BOT SEDANG MENGIRIM VIDEO*`
buffer = await getBuffer (anu.result.thumb)
YANZ.sendMessage(from, buffer, image, {quoted: mek, caption: captionnya})
miku = await getBuffer (anu.result.url)
YANZ.sendMessage(from, miku, video, {mimetype: 'video/mp4', quoted: mek})
break
case 'pleybuttondoc':{
  if (isBanned) return reply(mess.banned)
  reply(mess.wait)
  let yut = await yts(q)
  yta(yut.videos[0].url)
  .then((res) => {
  const { dl_link, thumb, title, filesizeF, filesize } = res
  axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
  .then((a) => {
  if (Number(filesize) >= 40000) return reply('FILE TERLALU BESAR!!!')
  sendFileFromUrl(dl_link, document, {mimetype: 'audio/mp3', filename: `${title+'.mp3'}`, quoted:mek})
  })
  })
  }
break
 case 'pleybuttonvn':{
  if (isBanned) return reply(mess.banned)
  reply(mess.wait)
  let yut = await yts(q)
  yta(yut.videos[0].url)
  .then((res) => {
  const { dl_link, thumb, title, filesizeF, filesize } = res
  axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
  .then((a) => {
  if (Number(filesize) >= 40000) return reply('FILE TERLALU BESAR!!!')
  sendFileFromUrl(dl_link, audio, {ptt:true, quoted:mek})
  })
  })
  }
  break
case 'mediafire':
if (isBanned) return reply (mess.banned)
  if (args.length < 1) return reply('Link Nya Mana? ')
  if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply('Linknya Error :v')
  reply(mess.wait)
  teks = args.join(' ')
  res = await mediafireDl(teks)
  result = `━━━• *MEDIAFIRE* •━━━

*Data Berhasil Didapatkan!*
▢ Nama : ${res[0].nama}
▢ Ukuran : ${res[0].size}
▢ Link : ${res[0].link}

_*Tunggu Proses Upload Media......*_`
reply(result)
sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: mek})
break
/*
case 'mediafire':
if (isBanned) return reply (mess.banned)
if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) return reply('```Invalid link```')
reply(mess.wait)
anu = await fetchJson (`https://api-Yanz Bot-xyz.herokuapp.com/api/mediafire?url=${args.join(' ')}`)
hah = `*TITLE MEDIAFIRE DIDAPATKAN*\n\nTitle : ${anu.result.title}\nSize : ${anu.result.size}\n\n*SEDANG MENGIRIM FILE JADI SABAR*`
reply(hah)
buffer = await getBuffer (anu.result.link)
YANZ.sendMessage(from, buffer, document, {mimetype: document, filename: anu.result.title, quoted: mek})
break
*/

case 'downloadmenu':
var menu = `
_*LIST MENU DOWNLOAD MENU*_

_${prefix}tiktok_
_${prefix}play_
_${prefix}ytmp3_
_${prefix}ytmp4_
_${prefix}igdl_
_${prefix}mediafire_
_${prefix}facebook_
`
sendButMessage(from, menu, '_*BY Yanz Bot*_', [
{buttonId: `${prefix}owner`, buttonText: {displayText: 'OWNER BOT:)'}, type: 1},
{buttonId: `${prefix}donasi`, buttonText: {displayText: 'DONASI BOT ;)'}, type: 1}
]);
break
/*________________________________________BATAS DOWNLOAD________________________________________*/
/*________________________________________MENU GROUP________________________________________*/
case 'welcome':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('Udah aktif um')
						welkom.push(from)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('Sukses mengaktifkan fitur welcome di group ini ✔️')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('Sukses menonaktifkan fitur welcome di group ini ✔️')
					} else {
						sendButMessage(from, `MODE WELCOME`, `Silahkan pilih salah satu`, [
            {
              buttonId: `${prefix}welcome 1`,
              buttonText: {
                displayText: `ON`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}welcome 0`,
              buttonText: {
                displayText: `OFF`,
              },
              type: 1,
            },
          ]);
        }
        break;
                                      break
                   case 'antilink':
                                  	if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (Number(args[0]) === 1) {
						if (isAntilink) return reply('Anti link group sudah aktif')
						antilink.push(from)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('Sukses mengaktifkan anti link group di group ini ✔️')
						YANZ.sendMessage(from,`Perhatian kepada seluruh member anti link group aktif apabila anda mengirim link group anda akan di kick dari group`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntilink) return reply('Mode anti link group sudah disable')
						antilink.splice(from, 1)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('Sukes menonaktifkan anti link group di group ini ✔️')
					} else {
						sendButMessage(from, `MODE ANTILINK`, `Silahkan pilih salah satu`, [
            {
              buttonId: `${prefix}antilink 1`,
              buttonText: {
                displayText: `ON`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}antilink 0`,
              buttonText: {
                displayText: `OFF`,
              },
              type: 1,
            },
          ]);
        }
        break;
case 'demote':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 𝘆𝗮??𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `*jabatan kamu di copot*🏃 :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						YANZ.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`Yahh @${mentioned[0].split('@')[0]} Jabatan kamu sebagai leluhur di grup telah di copot🏃`, mentioned, true)
						YANZ.groupDemoteAdmin(from, mentioned)
					}
					break
				case 'promote':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 ??𝗮??𝗴??𝘁 𝘆𝗮??𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲??𝗱𝗮𝗻𝗴!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `Yeee🥳 Kamu naik jabatan >_< :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						YANZ.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`Selamat🥳 @${mentioned[0].split('@')[0]} *anda naik menjadi admin group* >_<`, mentioned, true)
						YANZ.groupMakeAdmin(from, mentioned)
					}
					break
				case 'delete':
		case 'del':
		case 'd':
			if (!isGroup)return reply(mess.only.group)
			if (!isGroupAdmins)return reply(mess.only.admin)
			YANZ.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
			break
case 'block':
				 YANZ.updatePresence(from, Presence.composing) 
				 YANZ.chatRead (from)
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
					YANZ.blockUser (`${body.slice(7)}@c.us`, "add")
					YANZ.sendMessage(from, `perintah Diterima, memblokir ${body.slice(7)}@c.us`, text)
					break
                    case 'unblock':
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
				    YANZ.blockUser (`${body.slice(9)}@c.us`, "remove")
					YANZ.sendMessage(from, `Perintah Diterima, membuka ${body.slice(9)}@c.us`, text)
					break   	
					case 'hidetag':
                  if (isBanned) return reply(mess.banned)                
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					var value = body.slice(9)
					var group = await YANZ.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					YANZ.sendMessage(from, options, text)
					break
case 'tagall':
                    if (isBanned) return reply (mess.banned)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*#* @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
                case 'headsot':
				case 'hedsot':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Bismillah Hedsot >_< :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						YANZ.groupRemove(from, mentioned)
						mentions(teks, mentioned, true)
						YANZ.groupAdd(from, [num])
					} else {
						mentions(`Berhasil Meng hedsot pala nya  : @${mentioned[0].split('@')[0]}`, mentioned, true)
						YANZ.groupRemove(from, mentioned)
						}
					break
                case 'request':
					const cfrr = body.slice(8)
					if (cfrr.length > 300) return YANZ.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: mek})
					var nomor = mek.participant
					const ress = `*[REQUEST VITUR]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${cfrr}`
							var options = {
							text: ress,
                         				contextInfo: {mentionedJid: [nomor]},
                     			}
					YANZ.sendMessage('628811929177@s.whatsapp.net', options, text, {quoted: mek})
					YANZ.sendMessage('628811929177@s.whatsapp.net', options, text, {quoted: mek})
					YANZ.sendMessage('628811929177@s.whatsapp.net', options, text, {quoted: mek})
					reply('REQUEST ANDA TELAH SAMPAI KE PENGEMBANG SC, Requests palsu atau main² tidak akan ditanggapi.')
					break
                 case 'setpp': 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
                   			if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					media = await YANZ.downloadAndSaveMediaMessage(mek)
					await YANZ.updateProfilePicture (from, media)
					reply('*Sukses mengganti icon group*')
					break
				case 'add':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('Yang mau di add jin ya?')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						YANZ.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Gagal menambahkan target, mungkin karena di private')
					}
					break
				case 'kick':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, mengeluarkan :\n'
						for (let _ of mentioned) {
							teks += `@${mentioned[0].split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						YANZ.groupRemove(from, mentioned)
					} else {
						mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
						YANZ.groupRemove(from, mentioned)
					}
					break
case 'fitnah':
		if (isGroup) return reply(mess.only.group)
             if (isBanned) return reply(mess.banned)
				if (args.length < 1) return reply(`Gini kak : ${prefix}fitnah [@tag&pesan&balasanbot]\n\nContoh : ${prefix}fitnah @tagmember&hai&hai juga`)
				var gh = body.slice(8)
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					var replace = gh.split("&")[0];
					var target = gh.split("&")[1];
					var bot = gh.split("&")[2];
					YANZ.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
					break
					case 'jadian':
				if (!isGroup) return reply(mess.only.group)
				    if (isBanned) return reply(mess.banned)
					jds = []
					const jdii = groupMembers
					const koss = groupMembers
					const akuu = jdii[Math.floor(Math.random() * jdii.length)]
					const diaa = koss[Math.floor(Math.random() * koss.length)]
					teks = `Ciee.. yang lagi jadian @${akuu.jid.split('@')[0]} ♥️ @${diaa.jid.split('@')[0]} `
					jds.push(akuu.jid)
					jds.push(diaa.jid)
					mentions(teks, jds, true)
					break
case 'jelek': case 'goblok': case 'bego': case 'pinter': case 'jago': case 'nolep': case 'monyet':                 	 
                   case 'babi': case 'beban': case 'baik': case 'jahat': case 'anjing': 
                   case 'haram': case 'kontol': case 'pakboy': case 'pakgirl': 
               	   case 'wibu': case 'hebat': case 'sadboy': case 'sadgirl':  
               	   if (isBanned) return reply (mess.banned)
			       //tes
				   if (!isGroup) return reply(`GROUP ONLY`)
 				   jds = []
				   const A1 = groupMembers
  		 		   const B1 = groupMembers
 				   const C1 = A1[Math.floor(Math.random() * A1.length)]
				   D1 = `yang *ter${command}* disini adalah @${C1.jid.split('@')[0]}`                  
				   jds.push(C1.jid)
				   mentions(D1, jds, true)
				   break
case 'kapankah':
					// Fix Case By Wahyu/Ganss⛔
					if (!isGroup) return reply(mess.only.group)
				if (isBanned) return reply('Maaf kamu sudah terbanned!')
					kapankah = body.slice(1)
					const kapan =['Besok','Lusa','1 Hari Lagi','2 Hari Lagi','3 Hari Lagi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','7 Bulan Lagi','8 Bulan Lagi','9 Bulan Lagi','10 Bulan Lagi','11 Bulan Lagi','1 Tahun lagi','2 Tahun lagi','3 Tahun lag0i','4 Tahun lagi','5 Tahun lagi','6 Tahun lagi','7 Tahun lagi','8 Tahun lagi','9 Tahun lagi','10 Tahun lagi']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					YANZ.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: mek })
					//tes
					break
		case 'apakah':
					// Fix Case By Wahyu/Ganss⛔
					if (!isGroup) return reply(mess.only.group)
				if (isBanned) return reply('Maaf kamu sudah terbanned!')
					apakah = body.slice(1)
					const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					YANZ.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: mek })
					//tes
					break
// Siapa Disni Paling Ganteng
case 'ganteng':
				if (!isGroup) return reply(mess.only.group)
			    if (isBanned) return reply(mess.banned)
					jds = []
					const jdiidc = groupMembers
					const kosstc = groupMembers
					const akuutc = jdiidc[Math.floor(Math.random() * jdiidc.length)]
					teks = `yang terganteng di grub ini adalah @${akuutc.jid.split('@')[0]}`
					jds.push(akuutc.jid)
					mentions(teks, jds, true)
					break	
//SIAPA YANG PALING CANTIK 
case 'cantik':
				if (!isGroup) return reply(mess.only.group)
				if (isBanned) return reply(mess.banned)
					jds = []
					const jdiidr = groupMembers
					const kosstr = groupMembers
					const akuutr = jdiidr[Math.floor(Math.random() * jdiidr.length)]
					teks = `yang tercantik di grub ini adalah @${akuutr.jid.split('@')[0]}`
					jds.push(akuutr.jid)
					mentions(teks, jds, true)
					break 
					case 'group':
					apri = 'PILIH BEMRO'
        sendButMessage(from, apri, `Silahkan pilih salah satu`, [
          {
            buttonId: `${prefix}opengc`,
            buttonText: {
              displayText: `OPEN`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}closegc`,
            buttonText: {
              displayText: `CLOSE`,
            },
            type: 1,
          },
        ]);
        break
case "closegc": 
        if (!mek.key.fromMe && !isGroupAdmins) return reply("Only admin");
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (!isGroup) return;
        reply(`*GROUP BERHASIL DI TUTUP ADMIN ${pushname}*`);
        YANZ.groupSettingChange(from, GroupSettingChange.messageSend, true);
        break; 
      case "opengc":
        if (!mek.key.fromMe && !isGroupAdmins) return reply("Only admin");
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (!isGroup) return;
        reply(`*GROUP BERHASIL DI BUKA ADMIN ${pushname}*`);
        YANZ.groupSettingChange(from, GroupSettingChange.messageSend, false);
        break; 
				case 'listadmin':
					if (!isGroup) return reply(mess.only.group)
					teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
                case 'linkgroup':
                    if (!isGroup) return reply(mess.only.group)
                    if (!isGroupAdmins) return reply(mess.only.admin)
                    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                    linkgc = await YANZ.groupInviteCode(from)
                    reply('https://chat.whatsapp.com/'+linkgc)
                    break
                case 'leave':
                    if (!isGroup) return reply(mess.only.group)
                    if (isGroupAdmins || isOwner) {
                    	YANZ.groupLeave(from)
                    } else {
                        reply(mess.only.admin)
                    }
                    break
case 'rate':
				//woi
				if (isBanned) return reply(mess.banned)
					rate = body.slice(1)
					const ra =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					const te = ra[Math.floor(Math.random() * ra.length)]
					YANZ.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'%', text, { quoted: mek })
					break
           case 'hobby':
           //woi
           if (isBanned) return reply(mess.banned)
					hobby = body.slice(1)
					const hob =['Desah Di Game','Ngocokin Doi','Stalking sosmed nya mantan','Kau kan gak punya hobby awokawok','Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
					const by = hob[Math.floor(Math.random() * hob.length)]
					YANZ.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted: mek })
					break
case 'meme':
					meme = await fetchJson('https://kagchi-api.glitch.me/meme/memes', { method: 'get' })
					buffer = await getBuffer(`https://imgur.com/${meme.hash}.jpg`)
					YANZ.sendMessage(from, buffer, image, {quoted: mek, caption: 'Tuh meme by Yanz Bot'})
					break
           case 'seberapagay':
           //woi
           if (isBanned) return reply(mess.banned)
					gay = body.slice(13)
		   anu = await fetchJson(`https://arugaz.herokuapp.com/api/howgay`, {method: 'get'})
		   hasil = `Nih Liat Data Gay Si ${gay}\n\n\nPersentase Gay : ${anu.persen}%\nAlert!!! : ${anu.desc}`
		   reply(hasil)
					break
case 'groupmenu':
var menu = `
_*LIST MENU DOWNLOAD MENU*_

_${prefix}welcome_
_${prefix}antilink_
_${prefix}promote_
_${prefix}demote_
_${prefix}kick_
_${prefix}headshot_
_${prefix}leave_
_${prefix}linkgroup_
_${prefix}listadmin_
_${prefix}ganteng_
_${prefix}cantik_
_${prefix}jadian_
_${prefix}fitnah_
_${prefix}add_
_${prefix}setpp_
_${prefix}tagall_
_${prefix}hidetag_
_${prefix}block_
_${prefix}unblock_
_${prefix}delete_
_${prefix}seberapagay_
_${prefix}hobby_
_${prefix}rate_
_${prefix}jelek_
_${prefix}goblok_
_${prefix}bego_
_${prefix}pinter_
_${prefix}jago_
_${prefix}nolep_
_${prefix}monyet_
_${prefix}babi_
_${prefix}beban_
_${prefix}baik_
_${prefix}jahat_
_${prefix}anjing_
_${prefix}haram_
_${prefix}kontol_
_${prefix}pakboy_
_${prefix}pakgirl_
_${prefix}wibu_
_${prefix}hebat_
_${prefix}sadboy_
_${prefix}sadgirl_
_${prefix}group_
_${prefix}meme_
`
sendButMessage(from, menu, '_*BY Yanz Bot*_', [
{buttonId: `${prefix}owner`, buttonText: {displayText: 'OWNER BOT:)'}, type: 1},
{buttonId: `${prefix}donasi`, buttonText: {displayText: 'DONASI BOT ;)'}, type: 1}
]);
break
/*________________________________________BATAS GROUP________________________________________*/
/*________________________________________OTHER MENU________________________________________*/
case 'tourl':
            if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            owgi = await YANZ.downloadMediaMessage(boij)
            res = await upload(owgi)
            reply(res)
            } else {
            reply('kirim/reply gambar/video')
            }
            break
case 'infogempa':
if (isBanned) return reply (mess.banned)
anu = await fetchJson (`https://app-botpri.herokuapp.com/api/info/gempa?apikey=Fxc7`)
aku = `INFO GEMPA\n\n*Waktu: ${anu.result.Waktu}*\n*Lintang: ${anu.result.Lintang}*\n*Bujur: ${anu.result.Bujur}*\n*Kekuatan: ${anu.result.Magnitudo}*\n*Kedalaman: ${anu.result.Kedalaman}*\n*Wilayah: ${anu.result.Wilayah}*`
buffer = await getBuffer (anu.result.Map)
YANZ.sendMessage(from, buffer, image, {quoted: mek, caption: aku})
break
case 'infocovid':
if (isBanned) return reply (mess.banned)
anu = await fetchJson (`https://bagusmyid.herokuapp.com/api/covid-19?apikey=numpang`)
teks =`INFO COVID-19\nTotal Kasus: ${anu.result.totalCases}\nSembuh : ${anu.result.recovered}\nKematian: ${anu.result.deaths}\nKasus Aktif: ${anu.result.activeCases}\nKasus Reaktif: ${anu.result.closedCases}\nUpdate: ${anu.result.lastUpdate}`
reply(teks)
break
case 'pinterest':
            if(!q) return reply('gambar apa?')
            let pin = await hx.pinterest(q)
            let ac = pin[Math.floor(Math.random() * pin.length)]
            let di = await getBuffer(ac)
            await YANZ.sendMessage(from,di,image,{quoted: mek})
            break
case 'admin':
            case 'owner':
            case 'developer':   
const vcard = 'BEGIN:VCARD\n'  
            + 'VERSION:3.0\n'  
            + `FN: ${namaowner}\n`  
            + `ORG:${namabot};\n` 
            + `TEL;type=CELL;type=VOICE;waid=${owner}:+${owner}\n`  
            + 'END:VCARD'  
  YANZ.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: mek})
titid = 'butuh info tentang apa ya?'
           sendButMessage(from, titid, `Klik Untuk Mengetahui Info`, [
          {
            buttonId: `${prefix}sc`,
            buttonText: {
              displayText: `SCRIPT BOT`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}menu`,
            buttonText: {
              displayText: `MENU BOT`,
            },
            type: 1,
          },
]);
                 break
                case 'creator':
                const _0x31239a=_0x24e1;function _0x5151(){const _0x3ac6fd=['38nPYHLj','4013684bzyTjv','4002545xjOMje','TEL;type=CELL;type=VOICE;waid=628811929177:+628811929177\x0a','END:VCARD','1954bStpgi','699291yjvufE','354048AfTttz','insta','CHANNEL\x20YT','ORG:\x20BOT\x20INDO;\x0a','Klik\x20Untuk\x20Mengetahui\x20Info','BEGIN:VCARD\x0a','170moxOGv','INSTAGRAM','Jeff','962766zcFrNO','2911016RpefJc','112cMjRPp','VERSION:3.0\x0a','butuh\x20info\x20tentang\x20apa\x20ya?'];_0x5151=function(){return _0x3ac6fd;};return _0x5151();}(function(_0x1f46c5,_0xf6a3d1){const _0x3c78dd=_0x24e1,_0x430ae0=_0x1f46c5();while(!![]){try{const _0x320b82=parseInt(_0x3c78dd(0x1f6))/0x1*(parseInt(_0x3c78dd(0x1fb))/0x2)+parseInt(_0x3c78dd(0x1f1))/0x3+parseInt(_0x3c78dd(0x1f7))/0x4+-parseInt(_0x3c78dd(0x1f8))/0x5+parseInt(_0x3c78dd(0x1fd))/0x6*(parseInt(_0x3c78dd(0x1f3))/0x7)+parseInt(_0x3c78dd(0x1f2))/0x8+-parseInt(_0x3c78dd(0x1fc))/0x9*(parseInt(_0x3c78dd(0x1ee))/0xa);if(_0x320b82===_0xf6a3d1)break;else _0x430ae0['push'](_0x430ae0['shift']());}catch(_0x2c1e32){_0x430ae0['push'](_0x430ae0['shift']());}}}(_0x5151,0x85cf2));function _0x24e1(_0x5f52b5,_0x371f89){const _0x5151fb=_0x5151();return _0x24e1=function(_0x24e1e2,_0x4de660){_0x24e1e2=_0x24e1e2-0x1ea;let _0x1d9d34=_0x5151fb[_0x24e1e2];return _0x1d9d34;},_0x24e1(_0x5f52b5,_0x371f89);}const vcard2=_0x31239a(0x1ed)+_0x31239a(0x1f4)+'FN:\x20APRII\x0a'+_0x31239a(0x1eb)+_0x31239a(0x1f9)+_0x31239a(0x1fa);YANZ['sendMessage'](from,{'displayname':_0x31239a(0x1f0),'vcard':vcard2},MessageType['contact'],{'quoted':mek}),titid=_0x31239a(0x1f5),sendButMessage(from,titid,_0x31239a(0x1ec),[{'buttonId':prefix+'channel','buttonText':{'displayText':_0x31239a(0x1ea)},'type':0x1},{'buttonId':prefix+_0x31239a(0x1fe),'buttonText':{'displayText':_0x31239a(0x1ef)},'type':0x1}]);
                 break
                case 'channel':
                function _0x2a67(_0x5661d6,_0x1cec61){var _0x26175e=_0x2617();return _0x2a67=function(_0x2a67b4,_0x20cd38){_0x2a67b4=_0x2a67b4-0x6a;var _0x10ba08=_0x26175e[_0x2a67b4];return _0x10ba08;},_0x2a67(_0x5661d6,_0x1cec61);}var _0x47e7ac=_0x2a67;(function(_0x552708,_0xabf90f){var _0x3fb0a3=_0x2a67,_0x543d1b=_0x552708();while(!![]){try{var _0x5605f7=parseInt(_0x3fb0a3(0x70))/0x1*(parseInt(_0x3fb0a3(0x73))/0x2)+parseInt(_0x3fb0a3(0x6f))/0x3*(-parseInt(_0x3fb0a3(0x72))/0x4)+-parseInt(_0x3fb0a3(0x6a))/0x5+parseInt(_0x3fb0a3(0x6e))/0x6+-parseInt(_0x3fb0a3(0x6c))/0x7+-parseInt(_0x3fb0a3(0x71))/0x8+parseInt(_0x3fb0a3(0x6d))/0x9;if(_0x5605f7===_0xabf90f)break;else _0x543d1b['push'](_0x543d1b['shift']());}catch(_0x4bfa5f){_0x543d1b['push'](_0x543d1b['shift']());}}}(_0x2617,0xc3f9b),reply(_0x47e7ac(0x6b)));function _0x2617(){var _0x22f9a9=['165vsqiZr','11424272ArHfMA','4EtLGoH','2216cGwWNL','7113015HfkCRz','*NIH\x20CHANNEL\x20CREATORKU*\x0a*https://www.youtube.com/c/BOTINDO*','2120706NtEbVY','37820205DrhrBh','548604OJaJGt','1560567DosKLS'];_0x2617=function(){return _0x22f9a9;};return _0x2617();}
                break
case 'info':
function _0x5716(){var _0x4a838a=['\x0a\x0a\x20\x20‣\x20*Owner*\x20:\x20','```Lu\x20kebanned\x20kontol```','6mvVcbk','user','16RGSRmO','length','1732952mAiPZY','jid','742224WXPsTB','sendMessage','2299vLsUvQ','113551xIppSK','42mztVvc','1798785IBowzQ','split','1563408jCdKEh','6320KzeLmf','\x0a\x0a\x20\x20‣\x20*Total\x20Chat*\x20:\x20799005','78gklCUW','1880640imFHup','6pFMhWl','name'];_0x5716=function(){return _0x4a838a;};return _0x5716();}var _0x414d92=_0x19e1;(function(_0x4d9c6c,_0xb809a3){var _0x1a3bce=_0x19e1,_0x16010e=_0x4d9c6c();while(!![]){try{var _0xf9705=parseInt(_0x1a3bce(0x1ae))/0x1*(-parseInt(_0x1a3bce(0x1a1))/0x2)+-parseInt(_0x1a3bce(0x1a5))/0x3*(-parseInt(_0x1a3bce(0x1a9))/0x4)+-parseInt(_0x1a3bce(0x1b0))/0x5+-parseInt(_0x1a3bce(0x1af))/0x6*(-parseInt(_0x1a3bce(0x1b2))/0x7)+-parseInt(_0x1a3bce(0x1a7))/0x8*(parseInt(_0x1a3bce(0x1b6))/0x9)+-parseInt(_0x1a3bce(0x1b3))/0xa*(parseInt(_0x1a3bce(0x1ad))/0xb)+-parseInt(_0x1a3bce(0x1ab))/0xc*(parseInt(_0x1a3bce(0x1b5))/0xd);if(_0xf9705===_0xb809a3)break;else _0x16010e['push'](_0x16010e['shift']());}catch(_0x5932c2){_0x16010e['push'](_0x16010e['shift']());}}}(_0x5716,0xc55a2));function _0x19e1(_0x223402,_0x30077c){var _0x5716e8=_0x5716();return _0x19e1=function(_0x19e16d,_0x486ca1){_0x19e16d=_0x19e16d-0x1a1;var _0x3cb334=_0x5716e8[_0x19e16d];return _0x3cb334;},_0x19e1(_0x223402,_0x30077c);}if(isBanned)return reply(_0x414d92(0x1a4));me=YANZ[_0x414d92(0x1a6)],teks='*‣\x20Nama\x20bot*\x20:\x20'+me[_0x414d92(0x1a2)]+'\x0a\x0a\x20\x20‣\x20*Nomor\x20Bot*\x20:\x20@'+me[_0x414d92(0x1aa)][_0x414d92(0x1b1)]('@')[0x0]+_0x414d92(0x1a3)+namaowner+'\x0a\x0a\x20\x20‣\x20*Prefix*\x20:\x20[\x20_*MULTI\x20PREFIX*_\x20]\x0a\x0a\x20\x20‣\x20*Total\x20Block\x20Contact*\x20:\x20'+blocked[_0x414d92(0x1a8)]+_0x414d92(0x1b4),buffer=await getBuffer(thumb2),YANZ[_0x414d92(0x1ac)](from,buffer,image,{'caption':teks,'contextInfo':{'mentionedJid':[me[_0x414d92(0x1aa)]]}});
  break
                case 'insta':
                var _0x23b6d4=_0x3aea;function _0x5614(){var _0x27bc5f=['*NIH\x20INSTAGRAM\x20CREATORKU*\x0a*https://instagram.com/aprigans_*','28LjKAWJ','12051sbegic','661659wOyauE','20445IyNQzC','5226130UGrJBi','712882JhVcry','10zhOLZv','1600DmaIQz','1951356RgIbrg','3260492VleXxt'];_0x5614=function(){return _0x27bc5f;};return _0x5614();}function _0x3aea(_0x27e4ab,_0x54fb50){var _0x56140a=_0x5614();return _0x3aea=function(_0x3aeaa3,_0x5916c0){_0x3aeaa3=_0x3aeaa3-0xd0;var _0x412009=_0x56140a[_0x3aeaa3];return _0x412009;},_0x3aea(_0x27e4ab,_0x54fb50);}(function(_0x1932ad,_0x1b890d){var _0x358b20=_0x3aea,_0x4a621c=_0x1932ad();while(!![]){try{var _0x17936f=parseInt(_0x358b20(0xd9))/0x1+parseInt(_0x358b20(0xd1))/0x2+-parseInt(_0x358b20(0xda))/0x3+-parseInt(_0x358b20(0xd5))/0x4*(parseInt(_0x358b20(0xd2))/0x5)+parseInt(_0x358b20(0xd4))/0x6*(parseInt(_0x358b20(0xd7))/0x7)+parseInt(_0x358b20(0xd3))/0x8*(-parseInt(_0x358b20(0xd8))/0x9)+parseInt(_0x358b20(0xd0))/0xa;if(_0x17936f===_0x1b890d)break;else _0x4a621c['push'](_0x4a621c['shift']());}catch(_0x39fc92){_0x4a621c['push'](_0x4a621c['shift']());}}}(_0x5614,0xe4b34),reply(_0x23b6d4(0xd6)));
                break
              case 'ssweb':  
                   if (isBanned) return reply(mess.banned)
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} https://google.com*`)                  
                   reply(mess.wait)
                   anu = await getBuffer(`https://hardianto.xyz/api/tools/ssweb?url=${args.join(' ')}&apikey=hardianto`)
                   YANZ.sendMessage(from, anu, image, {caption: `BERHASIL KAK\n\nPlease Support *Yanz Bot*`, quoted: mek})
                   break
case 'othermenu':
var menu = `
_*LIST MENU OTHERMENU*_

_${prefix}tourl_
_${prefix}ssweb_
_${prefix}pinterest_
_${prefix}infogempa_
_${prefix}infocovid_
`
sendButMessage(from, menu, '_*BY Yanz Bot*_', [
{buttonId: `${prefix}owner`, buttonText: {displayText: 'OWNER BOT:)'}, type: 1},
{buttonId: `${prefix}donasi`, buttonText: {displayText: 'DONASI BOT ;)'}, type: 1}
]);
break
/*________________________________________BATAS OTHER________________________________________*/
/*________________________________________OWNER MENU________________________________________*/
case 'buggc':
if (!isOwner) return reply(mess.only.ownerB)
if (!isOwner) return reply(mess.only.ownerB)
await YANZ.toggleDisappearingMessages(from)
reply("mampus")
break
case 'hacked':
              if (!isOwner) return reply(mess.only.ownerB)
              if (!isBotGroupAdmins) return reply(mess.only.Badmin)
              if (args.length < 1) return reply('Teksnya?')
              reply('Otw Hack')
                tessgc = await getBuffer(`https://telegra.ph/file/93fd4cb214d27997aec65.jpg`)
                   YANZ.updateProfilePicture (from, tessgc)
                YANZ.groupUpdateSubject(from, `HACKED BY ${body.slice(8)}`)
                YANZ.groupUpdateDescription(from, `_Owner telah meretas grup ini_`)             
                YANZ.sendMessage(from, 'Succes Hacked', text, {quoted: mek})
					break
					case 'bc': 
					if (!isOwner) return reply(mess.only.ownerB) 
					if (args.length < 1) return reply('.......')
					anu = await YANZ.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buffer = await YANZ.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							YANZ.sendMessage(_.jid, buffer, image, {caption: `*「 PESAN BROADCAST 」*\n\n${body.slice(4)}`})
						}
						reply('*Suksess broadcast* ')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 BROADCAST ${namabot} 」*\n\n${body.slice(4)}`)
						}
						reply('*Suksess broadcast* ')
					}
					break
				case 'bcgc':
				     if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('Teksnya mana bosku >_<')
					anu = await groupMembers
					nom = mek.participant
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await YANZ.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							YANZ.sendMessage(_.jid, media, image, {caption: `* BC GROUP*\n\n Dari Grup : ${groupName}\n Pengirim : wa.me/${(sender.split('@')[0])}\n Pesan : ${body.slice(6)}`})
						}
						reply('*SUKSES BOSKU*')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `* BC GROUP*\n\n Dari Grup : ${groupName}\n Pengirim : wa.me/${(sender.split('@')[0])}\n Pesan : ${body.slice(6)}`)
						}
						reply('*SUKSES BOSKU*')
					}
					break
case 'bc2': 
					if (!isOwner) return reply(mess.only.ownerB) 
					if (args.length < 1) return reply('.......')
					anu = await YANZ.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await YANZ.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							YANZ.sendMessage(_.jid, bc, image, {quoted:mek,caption: `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`})
}
             reply('Suksess broadcast')
             } else {
             for (let _ of anu) {
YANZ.sendMessage(_.jid, 
			{"contentText": `*「 BROADCAST ${namabot} 」*\n\n${body.slice(4)}`,
			"footerText": '©Yanz Bot',
			"buttons": [
			{"buttonId": `${prefix}menu`,
			"buttonText": {"displayText": "MENU BOT"
			},"type": "RESPONSE"}
			], "headerType": 1,
			}, MessageType.buttonsMessage )
}
             reply('Suksess broadcast')
}
             break
case 'kickall':
	 if (!isOwner) return reply(mess.only.ownerB)
					members_id = []
   teks = (args.length > 1) ? body.slice(8).trim() : ''
	            teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*??* ${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					YANZ.groupRemove(from, members_id)
			       break
case 'clearall':
					if (!isOwner) return reply('Kamu siapa?')
					anu = await YANZ.chats.all()
					YANZ.setMaxListeners(25)
					for (let _ of anu) {
						YANZ.deleteChat(_.jid)
					}
					reply('Sukses delete all chat :)')
					break
			       case 'block':
				 YANZ.updatePresence(from, Presence.composing) 
				 YANZ.chatRead (from)
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
					YANZ.blockUser (`${body.slice(7)}@c.us`, "add")
					YANZ.sendMessage(from, `perintah Diterima, memblokir ${body.slice(7)}@c.us`, text)
					break
                    case 'unblock':
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
				    YANZ.blockUser (`${body.slice(9)}@c.us`, "remove")
					YANZ.sendMessage(from, `Perintah Diterima, membuka ${body.slice(9)}@c.us`, text)
					break   				
		case 'setppbott':
				if (!isOwner) return reply('*Only Owner bot*')
					YANZ.updatePresence(from, Presence.composing) 
					if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setppbot atau tag gambar yang sudah dikirim`)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await YANZ.downloadAndSaveMediaMessage(enmedia)
					await YANZ.updateProfilePicture(botNumber, media)
					reply('Makasih profil barunya😗')
					break 
					case 'ban':
					if (!isOwner) return reply(mess.only.ownerB)
					bnnd = body.slice(6)
					ban.push(`${bnnd}@s.whatsapp.net`)
					fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
					reply(`Nomor wa.me/${bnnd} telah dibanned !`)
					break
					case 'unban':
					if (!isOwner) return reply(mess.only.ownerB)
					bnnd = body.slice(8)
					ban.splice(`${bnnd}@s.whatsapp.net`, 1)
					fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
					reply(`Nomor wa.me/${bnnd} telah di unban!`)
					break
case 'ownermenu':
var menu = `
_*LIST MENU OWNERMENU*_

_${prefix}bc_
_${prefix}bc2_
_${prefix}bcgc_
_${prefix}buggc_
_${prefix}hacked_
_${prefix}ban_
_${prefix}unban_
_${prefix}block_
_${prefix}unblock_
_${prefix}setppbot_
_${prefix}clearall_
_${prefix}kickall_
`
sendButMessage(from, menu, '_*BY Yanz Bot*_', [
{buttonId: `${prefix}menu`, buttonText: {displayText: 'MENU BOT:)'}, type: 1},
{buttonId: `${prefix}donasi`, buttonText: {displayText: 'DONASI BOT ;)'}, type: 1}
]);
break
/*______________________________________BATAS OWNER____________________________*/
/*______________________________________ASUPAN MENU____________________________*/
case 'asupan':
               if (isBanned) return reply (mess.banned)
               reply(mess.wait)
               buffer = await getBuffer (`https://app-botpri.herokuapp.com/api/asupan?apikey=Fxc7`)
               YANZ.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek})
               break
case 'bocil':
case 'santuy':
case 'rikagusriani':
case 'ghea':
case 'ukty':
anu = await fetchJson (`https://api-Yanz Bot.herokuapp.com/api/asupan/${command}?apikey=Alphabot`)
buffer = await getBuffer (anu.result.url)
YANZ.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek})
break
case 'asupanmenu':
var menu = `
_*LIST MENU ASUPAN*_

_${prefix}asupan_
_${prefix}ukty_
_${prefix}santuy_
_${prefix}bocil_
_${prefix}ghea_
_${prefix}rikagusriani_
`
sendButMessage(from, menu, '_*BY Yanz Bot*_', [
{buttonId: `${prefix}menu`, buttonText: {displayText: 'MENU BOT:)'}, type: 1},
{buttonId: `${prefix}donasi`, buttonText: {displayText: 'DONASI BOT ;)'}, type: 1}
]);
break
/*______________________________________BATAS ASUPAN____________________________*/
/*______________________________________DOSA MENU____________________________*/
//HATI-HATI NAMBAH DOSA
case 'futanari':
                if (isBanned) return reply (mess.banned)
               reply(mess.wait)
                buffer = await getBuffer(`https://api.dapuhy.xyz/api/nsfw/nsfwfutanari?apikey=B0ZTfKR00k`)
                const bba = await YANZ.prepareMessage(from, buffer, MessageType.image)

            const buttons = [{buttonId:`${prefix + command}`,buttonText: {displayText: 'Next️'}, type: 1}]

            const ButonsMerssages = {

            contentText: `_© By Yanz Bot_`,

            buttons: buttons,

            footerText: `Klik Next Untuk Melanjutkan`,

            headerType: 4,

            imageMessage: bba.message.imageMessage

            }

            await YANZ.sendMessage(from, ButonsMerssages, MessageType.buttonsMessage, {quoted : mek})
                break 
    case 'anal':
          if (!isGroup) return reply(mess.only.group)
          reply(mess.wait)
          aku = (`https://hardianto.xyz/api/anime/random?nsfw=anal&apikey=hardianto`)
          kon = await getBuffer(aku)
          pll = `© By Yanz Bot`
   sendButImage(from, pll, `Klik Next Untuk Melanjutkan`, kon, [                      
          {
            buttonId: `${prefix}anal`,
            buttonText: {
              displayText: `Next︎`,
            },
            type: 1,
          },
        ]);                 
                    break       
case 'hentai':
case 'ahegao':
case 'ass':
case 'blowjob':
case 'bdsm':
case 'cuckold':
case 'cum':
case 'ero':
case 'femdom':
case 'foot':
case 'gangbang':
case 'glasses':
case 'jahy':
case 'masturbation':
case 'orgy':
case 'panties':
case 'pussy':
case 'thighs':
case 'yuri':
if (isBanned) return reply (mess.banned)
reply(mess.wait)
anu = await fetchJson (`https://api-Yanz Bot.herokuapp.com/api/nsfw/${command}?apikey=Alphabot`)
buffer = await getBuffer (anu.result)
const sa = await YANZ.prepareMessage(from, buffer, MessageType.image)

            const butons = [{buttonId:`${prefix + command}`,buttonText: {displayText: 'Next️'}, type: 1}]

            const ButonsMessages = {

            contentText: `_© By Yanz Bot_`,

            buttons: butons,

            footerText: `Klik Next Untuk Melanjutkan`,

            headerType: 4,

            imageMessage: sa.message.imageMessage

            }

            await YANZ.sendMessage(from, ButonsMessages, MessageType.buttonsMessage, {quoted : mek})
                break 
                case 'nekoh':
               if (isBanned) return reply (mess.banned)
               reply(mess.wait)
                buffer = await getBuffer(`https://api.dhamzxploit.my.id/api/nsfw/neko`)
                const bc = await YANZ.prepareMessage(from, buffer, MessageType.image)

            const buttosn = [{buttonId:`${prefix + command}`,buttonText: {displayText: 'Next️'}, type: 1}]

            const ButtonMessages = {

            contentText: `_© By Yanz Bot_`,

            buttons: buttosn,

            footerText: `Klik Next Untuk Melanjutkan`,

            headerType: 4,

            imageMessage: bc.message.imageMessage

            }

            await YANZ.sendMessage(from, ButtonMessages, MessageType.buttonsMessage, {quoted : mek})
                break
case 'dosamenu':
var menu = `
_*LIST DOSA MENU*_

_${prefix}hentai_
_${prefix}anal_
_${prefix}futanari_
_${prefix}yuri_
_${prefix}nekoh_
_${prefix}pussy_
_${prefix}ass_
_${prefix}ahegao_
_${prefix}blowjob_
_${prefix}bdsm_
_${prefix}cuckold_
_${prefix}cum_
_${prefix}ero_
_${prefix}femdom_
_${prefix}foot_
_${prefix}gangbang_
_${prefix}glasses_
_${prefix}jahy_
_${prefix}masturbation_
_${prefix}orgy_
_${prefix}panties_
_${prefix}pussy_
_${prefix}things_
`
sendButMessage(from, menu, '_*BY Yanz Bot*_', [
{buttonId: `${prefix}menu`, buttonText: {displayText: 'MENU BOT:)'}, type: 1},
{buttonId: `${prefix}donasi`, buttonText: {displayText: 'DONASI BOT ;)'}, type: 1}
]);
break
/*______________________________________BATAS DOSA____________________________*/
/*______________________________________PRIMBON MENU____________________________*/
case 'artinama':
if (isBanned) return reply (mess.banned)
if (!q) return reply (`Example: ${prefix + command} Yanz Bot`)
anu = await fetchJson (`https://api.loli.loveslife.biz/api/artinama?apikey=4s52PLhnkoWp5J49Kmbu&nama=${q}`)
reply(anu.result)
break
case 'tebakumur':
if (isBanned) return reply (mess.banned)
if (!q) return reply (`Example: ${prefix + command} Yanz Bot`)
anu = await fetchJson (`https://api.loli.loveslife.biz/api/tebak_umur?apikey=4s52PLhnkoWp5J49Kmbu&nama=${q}`)
teks = `Nama : ${anu.result.nama}\nUmur : ${anu.result.umur}`
reply(teks)
break
case 'primbonmenu':
var menu = `
_*LIST PRIMBON*_

_${prefix}artinama_
_${prefix}tebakumur_
*DIKIT YE BRO SOALNYA BANYAK ERORNYA🙂*
`
sendButMessage(from, menu, '_*BY YANZ BOT*_', [
{buttonId: `${prefix}menu`, buttonText: {displayText: 'MENU BOT:)'}, type: 1},
{buttonId: `${prefix}donasi`, buttonText: {displayText: 'DONASI BOT ;)'}, type: 1}
]);
break
/*______________________________________BATAS PRIMBON____________________________*/
/*______________________________________BOKEP MENU_______________________________*/
case 'bokep1':				 
				qute = fs.readFileSync('media/logo.jpg') 
				   YANZ.sendMessage(from, qute, image, { quoted: mek, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/h2nygxbyb6n9cyo/VID-20210107-WA1468.mp4/file' })
				   break
				   case 'bokep2':
				qute = fs.readFileSync('media/logo.jpg') 
				   YANZ.sendMessage(from, qute, image, { quoted: mek, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/pk8hozohzdc076c/VID-20210107-WA1466.mp4/file' })
				   break
				   case 'bokep3':	
				qute = fs.readFileSync('media/logo.jpg') 
				   YANZ.sendMessage(from, qute, image, { quoted: mek, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/112q3u286tnvzjo/VID-20210107-WA1467.3gp/file' })				    
				   break
				   case 'bokep4':	
				qute = fs.readFileSync('media/logo.jpg') 
				 if (isBanned) return reply (mess.banned)
				   YANZ.sendMessage(from, qute, image, { quoted: mek, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/arpphhxsv94ak0r/VID-20210107-WA1462.mp4/file' })				   
				   break
				   case 'bokep5':	
				qute = fs.readFileSync('media/logo.jpg') 
				 if (isBanned) return reply (mess.banned)
				   YANZ.sendMessage(from, qute, image, { quoted: mek, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/us3f4j62emftbrf/VID-20210107-WA1463.mp4/file' })				   
				   break
				   case 'bokep6':	

				qute = fs.readFileSync('media/logo.jpg') 
				 if (isBanned) return reply (mess.banned)
				   YANZ.sendMessage(from, qute, image, { quoted: mek, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/v4033tkl16hgf2b/VID-20210107-WA1459.mp4/file' })				   
				   break
                   case 'bokep7':

				qute = fs.readFileSync('media/logo.jpg') 
				 if (isBanned) return reply (mess.banned)
				   YANZ.sendMessage(from, qute, image, { quoted: mek, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/3scnim6d1x4b8ie/VID-20210107-WA1461.mp4/file' })				   
				   break
		           case 'bokep8':	

				qute = fs.readFileSync('media/logo.jpg') 
				if (isBanned) return reply (mess.banned)
				   YANZ.sendMessage(from, qute, image, { quoted: mek, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/dx9tklonu0eq36w/VID-20210107-WA1464.mp4/file' })				   
				   break
	
				   case 'bokep10':	

				qute = fs.readFileSync('media/logo.jpg') 
				if (isBanned) return reply (mess.banned)
				   YANZ.sendMessage(from, qute, image, { quoted: mek, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/snwja297dv4zvtl/VID-20210107-WA0036.mp4/file' })				   
				   break
				   case 'bokep11':	

				qute = fs.readFileSync('media/logo.jpg') 
				if (isBanned) return reply (mess.banned)
				   YANZ.sendMessage(from, qute, image, { quoted: mek, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/60dqek0mqhyt6rn/VID-20210107-WA1530.mp4/file' })				   
				   break
				   case 'bokep12':	
			    
				qute = fs.readFileSync('media/logo.jpg') 
				if (isBanned) return reply (mess.banned)
				   YANZ.sendMessage(from, qute, image, { quoted: mek, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/ni2mcdknb6zn50t/VID-20210107-WA1532.mp4/file' })				   
				   break
				   case 'bokep13':	

				qute = fs.readFileSync('media/logo.jpg')
               
				   YANZ.sendMessage(from, qute, image, { quoted: mek, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/i9t96lrmd9lm71z/VID-20210107-WA1542.mp4/file' })				   
				   break
				   case 'bokep14':	

				qute = fs.readFileSync('media/logo.jpg') 
				if (isBanned) return reply (mess.banned)
				   YANZ.sendMessage(from, qute, image, { quoted: mek, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/tjqdfmp8g08dt4e/VID-20210107-WA1536.mp4/file' })				   
				   break
	               case 'bokep15':

				qute = fs.readFileSync('media/logo.jpg') 
				if (isBanned) return reply (mess.banned)
				   YANZ.sendMessage(from, qute, image, { quoted: mek, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/x034q0s16u9vyhy/VID-20210107-WA1537.mp4/file' })				   
				   break
    	           case 'bokep16':

				qute = fs.readFileSync('media/logo.jpg') 
				if (isBanned) return reply (mess.banned)
				   YANZ.sendMessage(from, qute, image, { quoted: mek, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/mgmynqghjnon2q7/VID-20210107-WA1533.mp4/file' })				   
				   break
				   case 'bokep17':	

				qute = fs.readFileSync('media/logo.jpg') 
				if (isBanned) return reply (mess.banned)
				   YANZ.sendMessage(from, qute, image, { quoted: mek, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/ecly00at6adxs20/VID-20210107-WA1540.mp4/file' })				   
				   break
				   case 'bokep18':

				qute = fs.readFileSync('media/logo.jpg') 
				if (isBanned) return reply (mess.banned)
				   YANZ.sendMessage(from, qute, image, { quoted: mek, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/7qkn8nuog22jsco/VID-20210107-WA1534.mp4/file' })				   
				   break
				   case 'bokep19':				 
				
				qute = fs.readFileSync('media/logo.jpg') 
				if (isBanned) return reply (mess.banned)
				   YANZ.sendMessage(from, qute, image, { quoted: mek, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/vza5uaben93dfdr/VID-20210107-WA1527.mp4/file' })				   
				   break
				   case 'bokep20':			

				qute = fs.readFileSync('media/logo.jpg') 
				if (isBanned) return reply (mess.banned)
				   YANZ.sendMessage(from, qute, image, { quoted: mek, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/l7uzd4v9p95wpeb/VID-20210107-WA1541.mp4/file' })				   
				   break
				   case 'bokep21':				 
				
				qute = fs.readFileSync('media/logo.jpg') 
				if (isBanned) return reply (mess.banned)
				   YANZ.sendMessage(from, qute, image, { quoted: mek, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/icpnxsr18j6l2pp/VID-20210107-WA1528.mp4/file' })				   
				   break
				   case 'bokep22':		
				qute = fs.readFileSync('media/logo.jpg')
				   YANZ.sendMessage(from, qute, image, { quoted: mek, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/cscj9taoq5s5oj9/VID-20210107-WA1538.mp4/file' })				   
				   break
				   case 'bokep23':	
				qute = fs.readFileSync('media/logo.jpg') 
				if (isBanned) return reply (mess.banned)
				   YANZ.sendMessage(from, qute, image, { quoted: mek, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/saer161lthn4sy3/VID-20210107-WA1525.mp4/file' })				   
				   break
				   case 'bokep24':				 
				qute = fs.readFileSync('media/logo.jpg') 
				if (isBanned) return reply (mess.banned)
				   YANZ.sendMessage(from, qute, image, { quoted: mek, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \\nhttps://www.mediafire.com/file/9jy3nj2b2ljjzxb/VID-20210107-WA1539.mp4/file' })				   
				   break
case 'bokepmenu':
var menu =`
_*LIST BOKEP MENU*_

_${prefix}bokep1_
_${prefix}bokep2_
_${prefix}bokep3_
_${prefix}bokep4_
_${prefix}bokep5_
_${prefix}bokep6_
_${prefix}bokep7_
_${prefix}bokep8_
_${prefix}bokep9_
_${prefix}bokep10_
_${prefix}bokep11_
_${prefix}bokep12_
_${prefix}bokep13_
_${prefix}bokep14_
_${prefix}bokep15_
_${prefix}bokep16_
_${prefix}bokep17_
_${prefix}bokep18_
_${prefix}bokep19_
_${prefix}bokep20_
_${prefix}bokep21_
_${prefix}bokep22_
_${prefix}bokep23_
_${prefix}bokep24_
`
sendButMessage(from, menu, '_*BY YANZ BOT*_', [
{buttonId: `${prefix}menu`, buttonText: {displayText: 'MENU BOT:)'}, type: 1},
{buttonId: `${prefix}donasi`, buttonText: {displayText: 'DONASI BOT ;)'}, type: 1}
]);
break
/*______________________________________BATAS BOKEP____________________________*/
/*______________________________________ISLAM MENU____________________________*/
case 'ayatkursi':
anu = await fetchJson (`https://api.dapuhy.xyz/api/islam/ayatkursi?apikey=B0ZTfKR00k`)
w = anu.result
teks = `Tafsir : ${w.tafsir}\nArab : ${w.arabic}\nTranslite : ${w.translation}\nLatin : ${w.latin}`
reply(teks)
break
case 'kisahnabi':
               if (isBanned) return reply (mess.banned)
               if (args.length == 0) return reply(`Example: ${prefix + command} Muhammad`)
               anu = await fetchJson(`https://api.dapuhy.xyz/api/islam/kisahnabi?nabi=${q}&apikey=B0ZTfKR00k`)
               anu1 = `*NAMA NABI* : ${anu.name}\n`
               anu1 += `*KELAHIRAN* : ${anu.kelahiran}\n`
               anu1 += `*WAFAT USIA* : ${anu.wafat_usia}\n` 
               anu1 += `TINGGAL* : ${anu.singgah}\n`
               anu1 += `*KISAH* : ${anu.kisah}\n`
               reply(anu1)
               break
case 'menuislam':
var menu =`

_*LIST MENU ISLAM*_
_${prefix}ayatkursi_
_${prefix}kisahnabi_

*MARI BERHIJRAH*
`
sendButMessage(from, menu, '_*BY YANZ BOT*_', [
{buttonId: `${prefix}menu`, buttonText: {displayText: 'MENU BOT:)'}, type: 1},
{buttonId: `${prefix}donasi`, buttonText: {displayText: 'DONASI BOT ;)'}, type: 1}
]);
break
/*______________________________________BATAS ISLAM MENU____________________________*/
/*______________________________________SOUND MENU____________________________*/
case 'home':
const home = fs.readFileSync('./mp3/home.mp3')
YANZ .sendMessage(from, home, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'nengdesah':
const neng = fs.readFileSync('./mp3/desahan4.mp3')
YANZ .sendMessage(from, neng, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'susu':
const su = fs.readFileSync('./mp3/susu.mp3')
YANZ .sendMessage(from, su, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'beb':
const beb = fs.readFileSync('./mp3/syg.mp3')
YANZ .sendMessage(from, beb, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'gettingold':
const getting = fs.readFileSync('./mp3/gettingold.mp3')
YANZ.sendMessage(from, getting, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'sad':
const sad1 = fs.readFileSync('./mp3/sad.mp3')
YANZ .sendMessage(from, sad1, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'sad2':
const sad2 = fs.readFileSync('./mp3/sad2.mp3')
YANZ .sendMessage(from, sad2, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'sad3':
const sad3 = fs.readFileSync('./mp3/sad3.mp3')
YANZ .sendMessage(from, sad3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'sad4':
const sad4 = fs.readFileSync('./mp3/sad4.mp3')
YANZ .sendMessage(from, sad4, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'aeshtetic':
const tetik = fs.readFileSync('./mp3/aeshtetic.mp3')
YANZ .sendMessage(from, tetik, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'aeshtetic2':
const tetik2 = fs.readFileSync('./mp3/aeshtetic2.mp3')
YANZ .sendMessage(from, tetik3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'aeshtetic3':
const tetik3 = fs.readFileSync('./mp3/aeshtetic3.mp3')
YANZ .sendMessage(from, tetik3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'aeshtetic4':
const tetik4 = fs.readFileSync('./mp3/aeshtetic4.mp3')
YANZ .sendMessage(from, tetik4, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'allnight':
const allnight = fs.readFileSync('./mp3/allnight.mp3')
YANZ .sendMessage(from, allnight, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'lucas':
const lucas = fs.readFileSync('./mp3/lucas.mp3')
YANZ .sendMessage(from, lucas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'sowell':
const well = fs.readFileSync('./mp3/sowell.mp3')
YANZ .sendMessage(from, well, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'wanna':
const wanna = fs.readFileSync('./mp3/wanna.mp3')
YANZ .sendMessage(from, wanna, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'up':
const ups = fs.readFileSync('./mp3/up.mp3')
YANZ .sendMessage(from, ups, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'yourskin':
const skin = fs.readFileSync('./mp3/yourskin.mp3')
YANZ .sendMessage(from, skin, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'cutmeoff':
const moff = fs.readFileSync('./mp3/cutmeoff.mp3')
YANZ .sendMessage(from, moff, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'beautiful':
const ful = fs.readFileSync('./mp3/beautiful.mp3')
YANZ .sendMessage(from, ful, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'loosinggame':
const gam = fs.readFileSync('./mp3/loosinggame.mp3')
YANZ .sendMessage(from, gam, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'loosinginterest':
const rest = fs.readFileSync('./mp3/loosinginterest.mp3')
YANZ .sendMessage(from, rest, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'playdate':
const date = fs.readFileSync('./mp3/playdate.mp3')
YANZ .sendMessage(from, date, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'yasin':
yasin = fs.readFileSync('mp3/yasin.mp3')
YANZ.sendMessage(from, yasin, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'arrahman':
arrahman = fs.readFileSync('mp3/arrahman.mp3')
YANZ.sendMessage(from, arrahman, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'ayatkursi2':
const kursi = fs.readFileSync('./mp3/ayatkursi2.mp3')
YANZ.sendMessage(from, kursi, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'tilawah':
const tilawah = fs.readFileSync('./mp3/tilawah.mp3')
YANZ.sendMessage(from, tilawah, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'sholawatnabi':
const nabi = fs.readFileSync('./mp3/sholawatnabi.mp3')
YANZ.sendMessage(from, nabi, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'ngaji':
const ngaji1 = fs.readFileSync('./mp3/ngaji.mp3')
YANZ.sendMessage(from, ngaji1, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'ngaji2':
const ngaji2 = fs.readFileSync('./mp3/ngaji2.mp3')
YANZ.sendMessage(from, ngaji2, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'iri':
const irimp3 = fs.readFileSync('./mp3/iri.mp3');
YANZ.sendMessage(from, irimp3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'pale':
const pa = fs.readFileSync('./mp3/pale.mp3')
YANZ.sendMessage(from, pa, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'hallo':
const hallo = fs.readFileSync('./mp3/hallo.mp3')
YANZ.sendMessage(from, hallo, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'magic':
const magic = fs.readFileSync('mp3/magic.mp3')
YANZ.sendMessage(from, magic, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'menyukaiku':
const menyukaiku = fs.readFileSync('mp3/menyukaiku.mp3')
YANZ.sendMessage(from, menyukaiku, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound':
const soun = fs.readFileSync('./mp3/sound.mp3')
YANZ.sendMessage(from, soun, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'sound1':
satu = fs.readFileSync('./mp3/sound1.mp3');
YANZ.sendMessage(from, satu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound2':
dua = fs.readFileSync('./mp3/sound2.mp3');
YANZ.sendMessage(from, dua, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound3':
tiga = fs.readFileSync('./mp3/sound3.mp3');
YANZ.sendMessage(from, tiga, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound4':
empat = fs.readFileSync('./mp3/sound4.mp3');
YANZ.sendMessage(from, empat, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound5':
lima = fs.readFileSync('./mp3/sound5.mp3');
YANZ.sendMessage(from, lima, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound6':
enam = fs.readFileSync('./mp3/sound6.mp3');
YANZ.sendMessage(from, enam, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound7':
tujuh = fs.readFileSync('./mp3/sound7.mp3');
YANZ.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break									
case 'sound8':
delapan = fs.readFileSync('./mp3/sound8.mp3');
YANZ.sendMessage(from, delapan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound9':
sembilan = fs.readFileSync('./mp3/sound9.mp3');
YANZ.sendMessage(from, sembilan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound10':
sepuluh = fs.readFileSync('./mp3/sound10.mp3');
YANZ.sendMessage(from, sepuluh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound11':
sebelas = fs.readFileSync('./mp3/sound11.mp3');
YANZ.sendMessage(from, sebelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound12':
duabelas = fs.readFileSync('./mp3/sound12.mp3');
YANZ.sendMessage(from, duabelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound13':
tigabelas = fs.readFileSync('./mp3/sound13.mp3');
YANZ.sendMessage(from, tigabelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound14':
empatbelas = fs.readFileSync('./mp3/sound14.mp3');
YANZ.sendMessage(from, empatbelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound15':
limabelas = fs.readFileSync('./mp3/sound15.mp3');
YANZ.sendMessage(from, limabelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound16':
enambelas = fs.readFileSync('./mp3/sound16.mp3');
YANZ.sendMessage(from, enambelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound17':
tujuhbelas = fs.readFileSync('./mp3/sound17.mp3');
YANZ.sendMessage(from, tujuhbelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound118':
delapanbelas = fs.readFileSync('./mp3/sound18.mp3');
YANZ.sendMessage(from, delapanbelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound19':
sembilanbelas = fs.readFileSync('./mp3/sound19.mp3');
YANZ.sendMessage(from, sembilanbelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound20':
duapuluh = fs.readFileSync('./mp3/sound20.mp3');
YANZ.sendMessage(from, duapuluh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound21':
duasatu = fs.readFileSync('./mp3/sound21.mp3');
YANZ.sendMessage(from, duasatu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound22':
duadua = fs.readFileSync('./mp3/sound22.mp3');
YANZ.sendMessage(from, duadua, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound23':
duatiga = fs.readFileSync('./mp3/sound23.mp3');
YANZ.sendMessage(from, duatiga, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound24':
duaempat = fs.readFileSync('./mp3/sound24.mp3');
YANZ.sendMessage(from, duaempat, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound25':
dualima = fs.readFileSync('./mp3/sound25.mp3');
YANZ.sendMessage(from, dualima, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound26':
duaenam = fs.readFileSync('./mp3/sound26.mp3');
YANZ.sendMessage(from, duaenam, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound27':
duatujuh = fs.readFileSync('./mp3/sound27.mp3');
YANZ.sendMessage(from, duatujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound28':
duadelapan = fs.readFileSync('./mp3/sound28.mp3');
YANZ.sendMessage(from, duadelapan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound29':
duasembilan = fs.readFileSync('./mp3/sound29.mp3');
YANZ.sendMessage(from, duasembilan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound30':
tigapuluh = fs.readFileSync('./mp3/sound30.mp3');
YANZ.sendMessage(from, tigapuluh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound31':
tigasatu = fs.readFileSync('./mp3/sound31.mp3');
YANZ.sendMessage(from, tigasatu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound32':
tigadua = fs.readFileSync('./mp3/sound32.mp3');
YANZ.sendMessage(from, tigadua, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound33':
tigatiga = fs.readFileSync('./mp3/sound33.mp3');
YANZ.sendMessage(from, tigatiga, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound34':
tigaempat = fs.readFileSync('./mp3/sound34.mp3');
YANZ.sendMessage(from, tigaempat, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound35':
tigalima = fs.readFileSync('./mp3/sound35.mp3');
YANZ.sendMessage(from, tigalima, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound35':
tigalima = fs.readFileSync('./mp3/sound35.mp3');
YANZ.sendMessage(from, tigalima, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound36':
tigaenam = fs.readFileSync('./mp3/sound36.mp3');
YANZ.sendMessage(from, tigaenam, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound37':
tigatujuh = fs.readFileSync('./mp3/sound37.mp3');
YANZ.sendMessage(from, tigatujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound38':
tigadelapan = fs.readFileSync('./mp3/sound38.mp3');
YANZ.sendMessage(from, tigadelapan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound39':
tigasembilan = fs.readFileSync('./mp3/sound39.mp3');
YANZ.sendMessage(from, tigasembilan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound40':
empatpuluh = fs.readFileSync('./mp3/sound40.mp3');
YANZ.sendMessage(from, empatpuluh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound41':
empatsatu = fs.readFileSync('./mp3/sound41.mp3');
YANZ.sendMessage(from, empatsatu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound42':
empatdua = fs.readFileSync('./mp3/sound42.mp3');
YANZ.sendMessage(from, empatdua, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound43':
empattiga = fs.readFileSync('./mp3/sound43.mp3');
YANZ.sendMessage(from, empattiga, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound44':
empatempat = fs.readFileSync('./mp3/sound44.mp3');
YANZ.sendMessage(from, empatempat, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound45':
empatlima = fs.readFileSync('./mp3/sound45.mp3');
YANZ.sendMessage(from, empatlima, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound46':
empatenam = fs.readFileSync('./mp3/sound46.mp3');
YANZ.sendMessage(from, empatenam, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound47':
empattujuh = fs.readFileSync('./mp3/sound47.mp3');
YANZ.sendMessage(from, empattujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound48':
empatdelapan = fs.readFileSync('./mp3/sound48.mp3');
YANZ.sendMessage(from, empatdelapan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound49':
empatsembilan = fs.readFileSync('./mp3/sound49.mp3');
YANZ.sendMessage(from, empatsembilan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound50':
limapuluh = fs.readFileSync('./mp3/sound50.mp3');
YANZ.sendMessage(from, limapuluh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound51':
limasatu = fs.readFileSync('./mp3/Kecewa.mp3');
YANZ.sendMessage(from, limasatu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound52':
limadua = fs.readFileSync('./mp3/Jarak.mp3');
YANZ.sendMessage(from, limadua, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound53':
limatiga = fs.readFileSync('./mp3/Bisa.mp3');
YANZ.sendMessage(from, limatiga, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound54':
limaempat = fs.readFileSync('./mp3/Disini.mp3');
YANZ.sendMessage(from, limaempat, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound55':
limalima = fs.readFileSync('./mp3/Batu.mp3');
YANZ.sendMessage(from, limalima, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'desah':
delapansatu = fs.readFileSync('./mp3/desah.mp3');
YANZ.sendMessage(from, delapansatu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound56':
limaenam = fs.readFileSync('./mp3/Adanya.mp3');
YANZ.sendMessage(from, limaenam, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound57':
limatujuh = fs.readFileSync('./mp3/Pelangi.mp3');
YANZ.sendMessage(from, limatujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound58':
limadelapan = fs.readFileSync('./mp3/sound58.mp3');
YANZ.sendMessage(from, limadelapan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound59':
limasembilan = fs.readFileSync('./mp3/sound59.mp3');
YANZ.sendMessage(from, limasembilan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound60':
enampuluh = fs.readFileSync('./mp3/sound60.mp3');
YANZ.sendMessage(from, enampuluh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound61':
enamsatu = fs.readFileSync('./mp3/sound61.mp3');
YANZ.sendMessage(from, enamsatu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound62':
enamdua = fs.readFileSync('./mp3/sound62.mp3');
YANZ.sendMessage(from, enamdua, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound63':
enamtiga = fs.readFileSync('./mp3/sound63.mp3');
YANZ.sendMessage(from, enamtiga, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound64':
enamempat = fs.readFileSync('./mp3/sound64.mp3');
YANZ.sendMessage(from, enamempat, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound65':
enamlima = fs.readFileSync('./mp3/chruch.mp3');
YANZ.sendMessage(from, enamlima, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound66':
enamenam = fs.readFileSync('./mp3/gemes.mp3');
YANZ.sendMessage(from, enamenam, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound67':
enamtujuh = fs.readFileSync('./mp3/hujan.mp3');
YANZ.sendMessage(from, enamtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound68':
enamdelapan = fs.readFileSync('./mp3/Masih.mp3');
YANZ.sendMessage(from, enamdelapan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sasageyo':
if (isBanned) return reply (mess.banned)
lima = fs.readFileSync('./mp3/Sasageyo.mp3');
YANZ.sendMessage(from, lima, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'ganteng':
if (isBanned) return reply (mess.banned)
lapan = fs.readFileSync('./mp3/ganteng.mp3');
YANZ.sendMessage(from, lapan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'gatal':
if (isBanned) return reply (mess.banned)
bilan = fs.readFileSync('./mp3/gatal.mp3');
YANZ.sendMessage(from, bilan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'cemen':
if (isBanned) return reply (mess.banned)
puluh = fs.readFileSync('./mp3/alay.mp3');
YANZ.sendMessage(from, puluh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'soundmenu':
var menu = `

_*LIST SOUND MENU*_

_${prefix}iri_
_${prefix}desah_
_${prefix}nengdesah_
_${prefix}pale_
_${prefix}playdate_
_${prefix}beb_
_${prefix}hallo_
_${prefix}megic_
_${prefix}susu_
_${prefix}cemen_
_${prefix}menyukaiku_
_${prefix}gatal_
_${prefix}sasageyo_
_${prefix}sound_
_${prefix}sound1_
_${prefix}sound2_
_${prefix}sound3_
_${prefix}sound4_
_${prefix}sound5_
_${prefix}sound6_
_${prefix}sound7_
_${prefix}sound8_
_${prefix}sound9_
_${prefix}sound10_
_${prefix}sound11_
_${prefix}sound12_
_${prefix}sound13_
_${prefix}sound14_
_${prefix}sound15_
_${prefix}sound16_
_${prefix}sound17_
_${prefix}sound18_
_${prefix}sound19_
_${prefix}sound20_
_${prefix}sound21_
_${prefix}sound22_
_${prefix}sound23_
_${prefix}sound24_
_${prefix}sound25_
_${prefix}sound26_
_${prefix}sound27_
_${prefix}sound28_
_${prefix}sound29_
_${prefix}sound30_
_${prefix}sound31_
_${prefix}sound32_
_${prefix}sound33_
_${prefix}sound34_
_${prefix}sound35_
_${prefix}sound36_
_${prefix}sound37_
_${prefix}sound38_
_${prefix}sound39_
_${prefix}sound40_
_${prefix}sound41_
_${prefix}sound42_
_${prefix}sound43_
_${prefix}sound44_
_${prefix}sound45_
_${prefix}sound46_
_${prefix}sound47_
_${prefix}sound48_
_${prefix}sound49_
_${prefix}sound50_
_${prefix}sound51_
_${prefix}sound52_
_${prefix}sound53_
_${prefix}sound54_
_${prefix}sound55_
_${prefix}sound56_
_${prefix}sound57_
_${prefix}sound58_
_${prefix}sound59_
_${prefix}sound60_
_${prefix}sound61_
_${prefix}sound62_
_${prefix}sound63_
_${prefix}sound64_
_${prefix}sound65_
_${prefix}sound66_
_${prefix}sound67_
_${prefix}sound68_
`
sendButMessage(from, menu, '_*BY YANZ BOT*_', [
{buttonId: `${prefix}menu`, buttonText: {displayText: 'MENU BOT:)'}, type: 1},
{buttonId: `${prefix}donasi`, buttonText: {displayText: 'DONASI BOT ;)'}, type: 1}
]);
break
/*______________________________________BATAS SOUND MENU____________________________*/
/*______________________________________STIKER MENU____________________________*/
case 'stiker': 
				case 'sticker':
				case 'sgif':
				case 's':
				if (isBanned) return reply(mess.banned)
                    reply(mess.wait)
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await YANZ.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.stick)
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								YANZ.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await YANZ.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(mess.wait)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(mess.error.stick)
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								YANZ.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
							} else {
						reply(`Kirim gambar/video/gif dengan caption \n${prefix}sticker (durasi sticker video 1-9 detik)`)
					}
					break
case 'ttp':
                if (isBanned) return reply(mess.banned)
                if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix + command} aprii`)
                ini_text = args.join(" ")
                ini_buffer = await getBuffer(`https://api.xteam.xyz/ttp?file&text=${ini_text}`)
                YANZ.sendMessage(from, ini_buffer, sticker, {quoted: mek})
                break
                case 'attp':
                if (isBanned) return reply(mess.banned)
                if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix + command} aprii`)
                ini_text = args.join(" ")
                ini_buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${ini_text}`)
                YANZ.sendMessage(from, ini_buffer, sticker, {quoted: mek})
                break
case 'smeme':
					meme = await fetchJson('https://kagchi-api.glitch.me/meme/memes', { method: 'get' })
					buffer = await getBuffer(`https://imgur.com/${meme.hash}.jpg`)
					YANZ.sendMessage(from, buffer, sticker, {quoted: mek})
					break
case 'stikermenu':
var menu =`
_*LIST STIKER MENU*_

_${prefix}stiker_
_${prefix}sgif_
_${prefix}attp_
_${prefix}ttp_
_${prefix}smeme_
`
sendButMessage(from, menu, '_*BY YANZ BOT*_', [
{buttonId: `${prefix}menu`, buttonText: {displayText: 'MENU BOT:)'}, type: 1},
{buttonId: `${prefix}donasi`, buttonText: {displayText: 'DONASI BOT ;)'}, type: 1}
]);
break
				case 'wait':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						reply(mess.wait)
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						media = await YANZ.downloadMediaMessage(encmedia)
						await wait(media).then(res => {
							YANZ.sendMessage(from, res.video, video, {quoted: mek, caption: res.teks.trim()})
						}).catch(err => {
							reply(err)
						})
					} else {
						reply('Foto aja mas')
					}
					break
				default:




					if (isGroup && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					} else {
						return //console.log(color('[WARN]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
                           }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
}
starts()
