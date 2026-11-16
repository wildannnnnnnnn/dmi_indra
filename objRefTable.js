const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Audio,
		C3.Plugins.Mouse,
		C3.Plugins.Browser,
		C3.Plugins.Sprite,
		C3.Plugins.Text,
		C3.Plugins.Button,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.Button.Cnds.OnClicked,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.Browser.Acts.Close,
		C3.Plugins.Audio.Acts.Stop,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.Sprite.Acts.SetX,
		C3.Plugins.System.Exps.random,
		C3.Plugins.System.Exps.layoutwidth,
		C3.Plugins.Sprite.Acts.SetY,
		C3.Plugins.System.Exps.layoutheight,
		C3.Plugins.Mouse.Cnds.OnObjectClicked,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.System.Cnds.CompareVar
	];
};
self.C3_JsPropNameTable = [
	{Audio: 0},
	{Mouse: 0},
	{Browser: 0},
	{BG2: 0},
	{Bintang1: 0},
	{TextSKOR: 0},
	{BG1: 0},
	{TitleGAME: 0},
	{TextPetunjuk: 0},
	{TombolMULAI: 0},
	{TombolKELUAR: 0},
	{Bintang2: 0},
	{Bintang3: 0},
	{BG3: 0},
	{Profil: 0},
	{Text: 0},
	{Skor: 0}
];

self.InstanceType = {
	Audio: class extends self.IInstance {},
	Mouse: class extends self.IInstance {},
	Browser: class extends self.IInstance {},
	BG2: class extends self.ISpriteInstance {},
	Bintang1: class extends self.ISpriteInstance {},
	TextSKOR: class extends self.ITextInstance {},
	BG1: class extends self.ISpriteInstance {},
	TitleGAME: class extends self.ISpriteInstance {},
	TextPetunjuk: class extends self.ITextInstance {},
	TombolMULAI: class extends self.IButtonInstance {},
	TombolKELUAR: class extends self.IButtonInstance {},
	Bintang2: class extends self.ISpriteInstance {},
	Bintang3: class extends self.ISpriteInstance {},
	BG3: class extends self.ISpriteInstance {},
	Profil: class extends self.ISpriteInstance {},
	Text: class extends self.ITextInstance {}
}