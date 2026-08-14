# Parchi — working notes for AIH 2026

Not part of the submission. This is the stuff to have in your head when someone asks
questions about the deck.

## The one-line pitch

Photograph any prescription. Parchi reads it, keeps a running list of everything you have
been prescribed, and warns you when the same molecule shows up twice under two brand names.

## Why this problem and not something flashier

The pain is specific and easy to verify. Ask any chemist whether they have seen a customer
buy two brands of paracetamol in the same week. The fix does not need new hardware, new
regulation or a hospital partnership, which is exactly what a hackathon project should look
like.

The sharp bit is not OCR. Everyone can do OCR. The sharp bit is the brand-to-molecule index
plus a memory of past prescriptions. That is what turns "an app that reads text" into
"an app that catches a real mistake".

## Questions judges will ask, and the answers

**Isn't this just an OCR wrapper?**
OCR is step one of four. Take it away and you can still type the medicines in by hand and
the product still works. The value sits in the composition mapping and the cross-prescription
rules.

**What if the OCR misreads the name?**
The user confirms the parsed list before any check runs. A wrong read becomes a correction,
never a wrong warning. Unknown brands are shown as unknown, never as safe.

**Are you giving medical advice?**
No. Parchi never says stop a tablet or change a dose. It states a fact ("both contain
paracetamol") and gives the patient a sentence to ask the pharmacist. That distinction is
deliberate and it is on the slide.

**Where does the drug data come from?**
Public drug listings and formulary sources: CDSCO listings, Jan Aushadhi product lists,
published max daily doses. Curated by us into a local SQLite file, versioned, correctable
by users.

**Why offline?**
Because the moment that matters is at the counter, and small-town chemist shops are exactly
where the signal is worst. Also, prescriptions are sensitive, and the simplest privacy story
is that the data never moves.

## Demo script, 90 seconds

1. Scan prescription one. Two medicines appear, user taps confirm.
2. Scan prescription two from a different doctor.
3. The duplicate warning fires with the combined mg per day.
4. Tap listen, the schedule plays in Hindi.
5. Show flight mode is on the whole time.

Rehearse step 5. It lands harder than anything you can say.

## Build order if time gets tight

1. Brand-to-molecule database and the duplicate check. Without this there is no product.
2. Manual entry UI, so the demo cannot fail.
3. OCR on top of manual entry.
4. Dose ceiling and same-class checks.
5. Voice output.

Voice is the first thing to cut. The duplicate check is the last.

## Backup ideas, in case this track is full

- **Route-level air pollution dose.** Instead of showing an AQI number, compute how much
  PM2.5 a child actually breathes on two different walking routes to school and pick the
  cleaner one. Public CPCB data, real maths, good map demo.
- **Solar pump silent failure.** Detect a pump or rooftop system that is quietly generating
  less than it should from its own daily curve, before the owner notices the bill.

Both are fine. Neither has as clean a demo moment as the duplicate medicine warning.
