# First-principles-analys — Hero-1 r2 (A "Kortet" · B "Evify-replikan")

> 2026-07-18. Tre oberoende granskare (UX-craft · CRO/konvertering · kreativ strateg), var och en med
> egna headless-Chrome-renderingar av desktop 1440 + mobil 390, båda riktningarna. Syntes + canon-
> adjudicering av huvudagenten. Fixar märkta ✅ är redan applicerade i r3; ⚑ = ägarbeslut.

## 1. Betyg per detalj (efter r3-fixarna; skala 1–10)

| Detalj | A desktop | A mobil | B desktop | B mobil |
|---|---|---|---|---|
| Budskapsklarhet (5-sek-test) | 9 | 9 | 7,5 | 7,5 |
| Typografisk hierarki | 8,5 | 8 | 8 | 8 |
| Spacing-rytm | 8,5 | 8 | 8 | 8 |
| Header ↔ hero-balans | 8 | 8 | 8,5 | 8 |
| Bildbehandling / veil | 7,5 | 8 | 7,5 | 8 |
| CTA-finish (efter stretch-fixen) | 8 | 8 | 8 | 8 |
| Proof: trovärdighet + synlighet | 8,5 | 8 | 4→5 ⚑ | 6,5 |
| Visuell väg till CTA (F-mönster) | 9 | 9 | 6 | 7 |
| Fold-effektivitet | 8 | 8,5 | 5,5 ⚑ | 7,5 |
| Friktion | 9 | 9 | 8,5 | 8,5 |

**Domen (alla tre granskarna konvergerar):**
- **CRO:** A vinner klart (snitt 8,3/8,5 mot 6,4/7,3 före fix). Målgruppen (analytisk villaägare som letar
  efter haken) konverterar på *verifierbarhet i lässtråket* — A levererar hela VAD→VEM→VARFÖR→NÄSTA-kedjan
  på 5 sekunder på båda enheterna. B är en stämnings-hero: proof i fel hörn, lägre textkontrast, och
  100 svh-bilden gömmer produktväljaren (block 2) en hel skärm ner.
- **Strategen:** A säljer *förtroende*, B säljer *längtan*. För positionen "hantverkaren som säger
  sanningen" arbetar A närmare varumärket; B är vackrast men i form utbytbar mot Evify/1KOMMA5° —
  i B bär H1:an 100 % av differentieringen.
- **UX:** B är kompositionsmässigt elegantast (ram + proof-i-fot är fina grepp); A är tekniskt renast
  men saknar signaturelement i bildkolumnen.
- **Syntes-rekommendation:** **A som startsidans hero** (intent-trafik) — och stjäl B:s foto-emotion via
  själva fotot. B behålls som stämnings-alternativ (t.ex. för varm Meta-trafik / kampanjsida).

## 2. Applicerat i r3 (svärm-konsensus) ✅

1. **CTA-stretchen dödad** — `align-self:flex-start` (flex-kolumnens default drog knappen till full
   kolumnbredd med svävande pil = hela "billig/AI"-känslan). Mobil: full bredd med `space-between` så
   pilen högerställs som i ägarens referens.
2. **B: veil förstärkt** i mittzonen (0,46 @ 42 %) + subcopy weight 300→400 + text-shadow — läsbarhets-
   risken över den ljusa gaveln stängd.
3. **B: CTA-skugga** (`0 12px 32px -10px` midnatt-ton) — knappen lyfter från fotot.
4. **B mobil: död himmel återtagen** — padding-top 22vh→16vh.
5. **A mobil: bild/text-kantlinjering** (bildens inset = textens 24px).
6. **Proof-avdelaren** göms vid radbryt (<560px, orphan-fix).
7. **A desktop: falskt sidslut fixat** — hero ~94svh så nästa block-läge inte signalerar "sidan slut".
8. **A11y:** `:focus-visible`-ring på CTA:n.

## 3. Canon-adjudicering av granskar-flaggor (viktigt)

- ~~"hjälp i hela Sverige" = blocker~~ — **AVSLAGET.** Ägardirektiv 2026-07-18: Ampy är nationell
  elfirma; "hela Sverige" är tillåtet i all copy. (Två granskare flaggade mot äldre kanon.)
- ~~"Över 3 000 installationer per år" = [GAP]~~ — **AVSLAGET.** Owner-confirmed 2026-07-10
  (foretagsdata §5), redan i bruk i Energikalkylatorns trust-block.
- "5,0 på Google" — **KVAR med bock:** ägarlevererad siffra (Energikalkylator-precedent "5 av 5 ·
  Betyg på Google"); ⚑ bekräfta att 5,0 fortfarande är aktuellt betyg vid Bricks-sättning.

## 4. Ägarbeslut (⚑ — inget ändrat utan dig)

1. **⚑ Header vs hero-CTA:** headern säger "**Gratis** rådgivning" → /offert/, heron "**Kostnadsfri**
   rådgivning" → /kontakt/. Två namn + två destinationer för samma handling = message-match-läcka
   (CRO-major). Rek: EN etikett ("Kostnadsfri rådgivning") och EN destination på båda. Headertexten är
   ägar-låst sedan header-bygget, därför inte rörd.
2. **⚑ CTA-verb:** "Boka kostnadsfri rådgivning" (verb) bedöms starkare än substantivfrasen; ↗-pilen är
   dessutom webbkonvention för "extern länk" (CRO vill ha →). Din referensbild visar ↗ utan verb — den
   är följd. A/B-test-kandidat #1.
3. **⚑ B: proof-platsen:** ägardirektivet ("i footern av verktyget", Evify-troget) är följt; CRO:s data
   säger att hörnplacering gör beviset osynligt på 5 sek (4/10). Alternativ: proof under CTA:n även i B.
4. **⚑ Gradientens slutfärg** `#5eb1bf` (stålblå) är samplad ur din bild men är ingen Ampy-token — två
   granskare vill ankra i teal `#00a991`. Referensbilden är följd.
5. **⚑ Pulsprick-glowen på headerns CTA** drar blick från hero-CTA:n (strategen vill ta bort den) —
   header är låst, inte rörd.

## 5. Addera / ta bort (idéer, betygsatta av svärmen — inget implementerat)

**Värt att addera:**
- **Blixten som tyst signatur (strategens #1):** logotypens blixt används i dag noll gånger i heron.
  EN plats: blixt-glyf i CTA:n i stället för ↗, ELLER en tunn teal blixt-understrykning under
  "ordentligt" (ritas på ~400 ms, en gång). Inte båda.
- **Foto-verklighetssignal:** Ampy-bil/elektriker i bild (graderad till skymningspaletten) eller +10 %
  varm fönsterglöd — "tända fönster = el som fungerar" blir poäng i stället för dekor. (Asset-request.)
- **Mikrocopy under CTA:** "Svar inom en arbetsdag" (kanon-nära: "oftast inom en arbetsdag") — dämpar
  klick-friktion utan hype. ⚑ kolliderar med "BARA rubrik + paragraf"-direktivet → ditt beslut.
- **A: scroll-scent** — på riktiga sidan: låt produktväljarens överkant skymta under kortet.

**Värt att ta bort / hålla borta:**
- Inga fler grafiska element i B — fotot ÄR devicen (svärmen enig).
- Fyra accentsystem i samma vy (Googles fyrfärgs-G + teal-stjärnor + mint-gradient + solid teal-header)
  — övervägning: monokrom G. ⚑ smaksak.
- Ingen urgency/scarcity/countdown någonsin (candour-grinden).

## 6. A/B-test-backlog (candour-säker, när sidan är live + instrumenterad)

1. CTA-etikett: "Kostnadsfri rådgivning ↗" vs "Boka kostnadsfri rådgivning →" (mät CTA-CTR + form-starts).
2. B: proof i bildfoten vs under CTA:n (samma claims, bara position).
3. A: 94svh-hero vs ~86svh med väljar-peek (mät väljar-klick + lead-rate nedströms, inte bara hero-CTR).
