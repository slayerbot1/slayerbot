const fs = require('fs')
const chalk = require('chalk')
const { times, runtime, sender, pushname, formatDate, tanggal } = require('../library/function')


// Website Api
global.Api = {
	ampibi: 'https://ampibismm.my.id',
}

// Apikey Website Api
global.ApiKey = 'coderevolution' 

NameOwner = 'SlayerMods'
NameBot = 'Slayer Md'
Log = '\n『々Lord』Slayer☆☆☆'//console log gerak nya:v
Titlenyo = 'SUBSRIBE CHANNEL Slayer Team'

// FOOTER/WM
Mfooter = 'Peringatan: Dilarang keras spam command.\n\n© Slayer Team'// footer menu


Uig = 'https://www.instagram.com/itsslayerteamreall'//link ig lu
Ugc = 'https://chat.whatsapp.com/C6lMca97cOyGr0TQ7ksWCf'

// Other
global.owner = ['62895335751267']
global.premium = ['62895335751267']
global.profilebio = ['62895335751267'] // ini ganti nomor lu ntar bisa nampilin pp lu
global.packname = 'Slayer Bot'
global.footer = '© SlayerMods'// footer biasa
global.author = 'SlayerMods || ig: @itsslayerteamreall'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.act = {
		wait: 'Please Wait a Moment, Processing Data..',
		urlerr: 'Link Error',
		nurl: 'Masukan url',
		ntext: 'Masukan Parameter',
		proc:'Loading Please Wait..',
		error:'Error :(',
		success:'Success !',
		repiar:'This Feature Maintenance!',
		botadm:'Jadiin Admin Dulu!',
		admin:'Khusus Admin Woi!',
		done:'Done!',
		gc:'Only Group Allowed',
		owner:'Only Owner Allowed'
}


exports.allmenu = (sender, prefix, pushname) => {
	return `Hi ${m.pushName} 👋
				
╭──❲ *${NameBot}* ❳	
│	
│┌──⭓ *INFO*
││
││⭔ *Nama :* _「 ${pushname} 」_
││⭔ *Nomer :* _「 ${m.sender.split("@")[0]} 」_
││⭔ *Jam :* _「 ${times(new Date)} 」_
││⭔ *Tanggal :* _「 ${tanggal(new Date)} 」_
││⭔ *Runtime :* _「 ${runtime(process.uptime())} 」_
││
│└───────⭓
│
│⫺ ${prefix}ping 
│⫺ ${prefix}menu
│⫺ ${prefix}script
│
│┌──⭓ *OWNERMENU*
││
││⫹⫺ ${prefix}block @tag
││⫹⫺ ${prefix}unblock @tag
││⫹⫺ ${prefix}setppbot _reply_
││⫹⫺ ${prefix}join _link_
││⫹⫺ ${prefix}leave 
││⫹⫺ ${prefix}anticall 
││⫹⫺ ${prefix}addprem @tag _jumlah_
││⫹⫺ ${prefix}delprem @tag
││⫹⫺ ${prefix}setbotbio
││⫹⫺ ${prefix}setnamabot
││⫹⫺ > 
││⫹⫺ => 
││⫹⫺ $ 
││
│╰≻
│
│┌──⭓ *DOWNLOADERMENU*
││ 
││⫹⫺ ${prefix}tiktok _url_ 
││⫹⫺ ${prefix}tiktokaudio _url_ 
││⫹⫺ ${prefix}ytmp3 _url_ 
││
│╰≻
│
│┌──⭓ *SEARCHMENU*
││
││⫹⫺ ${prefix}play [query] 
││⫹⫺ ${prefix}ytsearch [query] 
││⫹⫺ ${prefix}pinterest 
││				
│╰≻
│
│┌──⭓ *GROUPMENU*
││
││⫹⫺ ${prefix}linkgc
││⫹⫺ ${prefix}add _num_
││⫹⫺ ${prefix}kick @tag
││⫹⫺ ${prefix}tagall _text_
││⫹⫺ ${prefix}promote @tag
││⫹⫺ ${prefix}demote @tag
││⫹⫺ ${prefix}setname _text_
││⫹⫺ ${prefix}setppgroup _reply_ 
││⫹⫺ ${prefix}setdesk _text_
││⫹⫺ ${prefix}hidetag _text_
││⫹⫺ ${prefix}totag _reply_ 
││⫹⫺ ${prefix}linkgroup 
││
│╰≻
│
│┌──⭓ *TOOLMENU*
││
││⫹⫺ ${prefix}nulis _text_
││⫹⫺ ${prefix}sticker/s 
││⫹⫺ ${prefix}stickergif 
││⫹⫺ ${prefix}swm [q|q] 
││⫹⫺ ${prefix}toimg _reply_ 
││⫹⫺ ${prefix}style _text_
││⫹⫺ ${prefix}smeme [q|q] 
││⫹⫺ ${prefix}ebinary _text_
││⫹⫺ ${prefix}dbinary [code] 
││⫹⫺ ${prefix}tomp4 [send/reply] 
││⫹⫺ ${prefix}toaud [send/reply] 
││⫹⫺ ${prefix}tomp3 [send/reply] 
││⫹⫺ ${prefix}tovn [send/reply] 
││⫹⫺ ${prefix}togif [send/reply] 
││⫹⫺ ${prefix}tourl [send/reply] 
││
│╰≻
│
│┌──⭓ *FUNMENU*
││ 
││⫹⫺ ${prefix}menfes 
││⫹⫺ ${prefix}jadian 
││⫹⫺ ${prefix}jodohku 
││
│╰≻
│
│┌──⭓ *OTHERMENU*
││ 
││⫹⫺ ${prefix}requestfitur _text_
││⫹⫺ ${prefix}listonline 
││⫹⫺ ${prefix}listgc 
││⫹⫺ ${prefix}listpc 
││
│╰≻
│
│┌──⭓ *RANDOMCERITA*
││⫹⫺ ${prefix}cerpen-anak
││⫹⫺ ${prefix}cerpen-bahasadaerah
││⫹⫺ ${prefix}cerpen-bahasainggris
││⫹⫺ ${prefix}cerpen-bahasajawa
││⫹⫺ ${prefix}cerpen-budaya
││⫹⫺ ${prefix}cerpen-cinta
││⫹⫺ ${prefix}cerpen-cintaislami
││⫹⫺ ${prefix}cerpen-cintapertama
││⫹⫺ ${prefix}cerpen-cintaromantis
││⫹⫺ ${prefix}cerpen-cintasedih
││⫹⫺ ${prefix}cerpen-cintasegitiga
││⫹⫺ ${prefix}cerpen-cintasejati
││⫹⫺ ${prefix}cerpen-galau
││⫹⫺ ${prefix}cerpen-gokil
││⫹⫺ ${prefix}cerpen-inspiratif
││⫹⫺ ${prefix}cerpen-jepang
││⫹⫺ ${prefix}cerpen-kehidupan
││⫹⫺ ${prefix}cerpen-keluarga
││⫹⫺ ${prefix}cerpen-kisahnyata
││⫹⫺ ${prefix}cerpen-korea
││⫹⫺ ${prefix}cerpen-kristen
││⫹⫺ ${prefix}cerpen-liburan
││⫹⫺ ${prefix}cerpen-malaysia
││⫹⫺ ${prefix}cerpen-mengharukan
││⫹⫺ ${prefix}cerpen-misteri
││⫹⫺ ${prefix}cerpen-motivasi
││⫹⫺ ${prefix}cerpen-nasihat
││⫹⫺ ${prefix}cerpen-nasionalisme
││⫹⫺ ${prefix}cerpen-olahraga
││⫹⫺ ${prefix}cerpen-patahhati
││⫹⫺ ${prefix}cerpen-penantian
││⫹⫺ ${prefix}cerpen-pendidikan
││⫹⫺ ${prefix}cerpen-pengalaman
││⫹⫺ ${prefix}cerpen-pengorbanan
││⫹⫺ ${prefix}cerpen-penyesalan
││⫹⫺ ${prefix}cerpen-perjuangan
││⫹⫺ ${prefix}cerpen-perpisahan
││⫹⫺ ${prefix}cerpen-persahabatan
││⫹⫺ ${prefix}cerpen-petualangan
││⫹⫺ ${prefix}cerpen-ramadhan
││⫹⫺ ${prefix}cerpen-remaja
││⫹⫺ ${prefix}cerpen-rindu
││⫹⫺ ${prefix}cerpen-rohani
││⫹⫺ ${prefix}cerpen-romantis
││⫹⫺ ${prefix}cerpen-sastra
││⫹⫺ ${prefix}cerpen-sedih
││⫹⫺ ${prefix}cerpen-sejarah
│╰≻
╰────────────────⊱
`
}

exports.BData = () => {
	return `┍┈–––• *BIODATA OWNER*
┆⫹⫺ Nama : Slayer Team 
┆⫹⫺ Hobby : NGODING & MODDER
┆⫹⫺ Status : SINGLE
┆⫹⫺ Birthday : Screet guys
┆⫹⫺ Address : Manusia
└––––––––––––––––––·•

┍┈––––––• *SKILLS*
┆> JavaScript [50%]
┆> Html [98%]
┆> CSS [98%]
└––––––––––––––––––·•\n`
}

global.thumb = fs.readFileSync('./media/me.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})