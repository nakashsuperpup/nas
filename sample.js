/* NAS seeded class notes — the inner-circle drops. Answers render via renderMarkdown
   (tables, lists, bold). Image questions carry an `image` path and are skipped by
   flashcards/quiz. Bump SAMPLE_VER in app.js when this changes. */
window.SAMPLE_LECTURES = [
  {
    "topic": "Endocrine — Review Session",
    "questions": [
      {
        "n": 1,
        "type": "short_answer",
        "terms": [
          "thyroid hormone"
        ],
        "question": "What are two effects of thyroid hormone?",
        "answer": "**↑ Metabolism** and **↑ heart rate**."
      },
      {
        "n": 2,
        "type": "short_answer",
        "terms": [
          "hormonal",
          "humoral",
          "nervous"
        ],
        "question": "Name the three ways hormone release is controlled — and give an example of each.",
        "answer": "Name all three — the names are worth half the points.\n\n- **Hormonal** — a hormone triggers release. *Ex:* hypothalamic hormones control release/inhibition of anterior-pituitary hormones.\n- **Humoral** — a change in a blood nutrient/ion. *Ex:* a change in blood glucose level.\n- **Nervous** — a neuron triggers release. *Ex:* sympathetic stimulation → epinephrine from the adrenal medulla."
      },
      {
        "n": 3,
        "type": "short_answer",
        "terms": [
          "protein hormones",
          "steroid hormones"
        ],
        "question": "Compare & contrast protein vs. steroid hormones.",
        "answer": "| | **steroid** | **protein** |\n|---|---|---|\n| receptor location | inside the cell | on the membrane surface |\n| duration | long-lasting | short-lasting |\n| onset | slow (delayed) | fast (quick) |\n| 2nd messengers | none (acts on DNA directly) | uses (G-protein → cAMP) |\n\n⚠️ Confirm with DrK before the exam. In Thursday's review she stated the onset and second-messenger parts the reverse way (steroid = quick / uses second messengers; protein = slow / doesn't). The table above is the standard, textbook-correct A&P."
      },
      {
        "n": 4,
        "type": "image",
        "terms": [
          "endocrine glands"
        ],
        "image": "img/endo-glands.jpg",
        "question": "Endocrine glands — name the gland (or the hormone it produces).",
        "answer": "You're given a hormone → name the gland (or the gland → its hormone). Know which gland makes what.\n\n| gland | hormone(s) |\n|---|---|\n| Hypothalamus | releasing/inhibiting hormones (TRH, CRH, GnRH, GHRH, GHIH, PRH/PIH); makes ADH & oxytocin |\n| Anterior pituitary | TSH · PRL · FSH · LH · ACTH · GH |\n| Posterior pituitary | stores/releases ADH & oxytocin |\n| Pineal | melatonin |\n| Thyroid | T3 / T4 (thyroid hormone) · calcitonin |\n| Parathyroid | PTH |\n| Adrenal cortex | cortisol · aldosterone · androgens |\n| Adrenal medulla | epinephrine · norepinephrine |\n| Pancreas | insulin · glucagon |\n| Gonads | estrogen / testosterone |"
      },
      {
        "n": 5,
        "type": "short_answer",
        "terms": [
          "transcription",
          "translation"
        ],
        "question": "Which hormones change the rate of transcription & translation?",
        "answer": "**Steroid hormones and thyroid hormones.** (Calcitriol does too — but of the options given, choose steroid + thyroid.)"
      },
      {
        "n": 6,
        "type": "image",
        "terms": [
          "up-regulation",
          "down-regulation"
        ],
        "image": "img/endo-hw.jpg",
        "question": "Sort the statements into up- vs. down-regulation.",
        "answer": "Homework — CH 17 Lab Packet, Q19. The correct answers are in the screenshot above."
      },
      {
        "n": 7,
        "type": "short_answer",
        "terms": [
          "insulin",
          "cortisol",
          "growth hormone",
          "glucagon"
        ],
        "question": "Insulin, cortisol, GH, glucagon — where made · target · effect.",
        "answer": "| hormone | made in | target | effect |\n|---|---|---|---|\n| **Insulin** | beta cells | liver & fat | ↓ blood glucose |\n| **Cortisol** | zona fasciculata (adrenal cortex) | liver & adipose | ↑ blood glucose |\n| **Growth hormone** | anterior pituitary | liver / nearly all cells | ↑ protein synthesis & mitosis (growth) |\n| **Glucagon** | alpha cells | liver | ↑ blood glucose |"
      },
      {
        "n": 8,
        "type": "short_answer",
        "terms": [
          "receptor",
          "target cell"
        ],
        "question": "How can a hormone act specifically on only one type of cell?",
        "answer": "Only cells that have the **receptor** for it respond. The presence of the receptor makes a cell the target; cells without it aren't affected."
      },
      {
        "n": 9,
        "type": "short_answer",
        "terms": [
          "hormone targets"
        ],
        "question": "Match the hormones to their targets.",
        "answer": "- **Bone** — PTH · calcitriol · calcitonin · growth hormone\n- **Kidney** — PTH · aldosterone · ADH · ANP\n- **Anterior pituitary** — the hypothalamic hormones (TRH, GHRH, GHIH, PRH/PIH…); also cortisol (neg. feedback)\n- **Breast tissue** — prolactin & oxytocin"
      },
      {
        "n": 10,
        "type": "short_answer",
        "terms": [
          "endocrine glands",
          "endocrine cells"
        ],
        "question": "Which glands are solely endocrine, and which organs have another primary function but also contain endocrine cells?",
        "answer": "**Solely endocrine:** pituitary, pineal, thyroid, parathyroid, adrenal.\n\n**Organs with endocrine cells:** hypothalamus, heart, liver, stomach, pancreas, kidneys, gonads (also skin, thymus, small intestine, adipose)."
      },
      {
        "n": 11,
        "type": "short_answer",
        "terms": [
          "hormone effects"
        ],
        "question": "What are two effects a hormone can have on a target cell?",
        "answer": "*(Not covered in the recording — from your notes.)* It depends on solubility: **lipid-soluble** → changes gene transcription (a new protein is made); **water-soluble** → a second messenger activates enzymes that already exist in the cell."
      }
    ]
  },
  {
    "topic": "Microbiology — Test Review",
    "questions": [
      {
        "n": 1,
        "type": "short_answer",
        "terms": [
          "ATP"
        ],
        "question": "What is the function of ATP?",
        "answer": "ATP is the cell's main **energy currency**. It stores and releases energy for cellular processes such as active transport, muscle contraction, and protein synthesis."
      },
      {
        "n": 2,
        "type": "short_answer",
        "terms": [],
        "question": "True or False: Atoms of the same element have the same number of protons.",
        "answer": "**True** ✅"
      },
      {
        "n": 3,
        "type": "short_answer",
        "terms": [
          "phospholipid"
        ],
        "question": "Give an example of an amphipathic molecule in the cell membrane.",
        "answer": "**Phospholipid**\n\n- **Hydrophilic** (water-loving) head\n- **Hydrophobic** (water-fearing) tails"
      },
      {
        "n": 4,
        "type": "short_answer",
        "terms": [],
        "question": "True or False: Nucleic acids have primary, secondary, tertiary, and quaternary levels of organization.",
        "answer": "**False** ❌\n\n- **Proteins** have all four levels of structure.\n- Nucleic acids mainly have **primary** and **secondary** structures."
      },
      {
        "n": 5,
        "type": "short_answer",
        "terms": [],
        "question": "What is matter?",
        "answer": "Anything that has **mass** and occupies **space**."
      },
      {
        "n": 6,
        "type": "short_answer",
        "terms": [],
        "question": "What is the maximum number of electrons in the first energy shell?",
        "answer": "**2 electrons**"
      },
      {
        "n": 7,
        "type": "short_answer",
        "terms": [],
        "question": "Compare inorganic and organic molecules.",
        "answer": "**Living things are made of organic molecules.**\n\n**Organic molecules**\n- Contain **carbon and hydrogen** (C–H bonds)\n- Examples: carbohydrates, lipids, proteins, nucleic acids\n\n**Inorganic molecules**\n- Usually do **not** contain C–H bonds\n- Examples: water, salts, oxygen, carbon dioxide"
      },
      {
        "n": 8,
        "type": "short_answer",
        "terms": [],
        "question": "DNA vs. sugar solution: which elements are found in DNA?",
        "answer": "**Carbon (C), Hydrogen (H), Oxygen (O), Nitrogen (N), and Phosphorus (P).**\n\nSugar contains only C, H, and O — but DNA **also** contains nitrogen and phosphorus."
      },
      {
        "n": 9,
        "type": "short_answer",
        "terms": [],
        "question": "Where are protons and neutrons located?",
        "answer": "In the **nucleus** of the atom."
      },
      {
        "n": 10,
        "type": "short_answer",
        "terms": [
          "lipids"
        ],
        "question": "Give examples of lipids.",
        "answer": "- Fats (triglycerides)\n- Oils\n- Waxes\n- Phospholipids\n- Steroids (cholesterol)"
      },
      {
        "n": 11,
        "type": "short_answer",
        "terms": [
          "water"
        ],
        "question": "What is the most important solvent in living organisms?",
        "answer": "**Water (H₂O)**"
      },
      {
        "n": 12,
        "type": "short_answer",
        "terms": [],
        "question": "True or False: Polar molecules are more reactive than nonpolar molecules.",
        "answer": "**True** ✅\n\nPolar molecules dissolve in water and participate in many chemical reactions."
      },
      {
        "n": 13,
        "type": "short_answer",
        "terms": [
          "thymine"
        ],
        "question": "Which nucleotide is found in DNA but not RNA?",
        "answer": "**Thymine (T)** — RNA uses **Uracil (U)** instead."
      },
      {
        "n": 14,
        "type": "short_answer",
        "terms": [],
        "question": "Where are electrons found?",
        "answer": "In **electron shells** (energy levels / orbitals) surrounding the nucleus."
      },
      {
        "n": 15,
        "type": "short_answer",
        "terms": [],
        "question": "Which organic molecules contain these functional groups?",
        "answer": "| functional group | found in |\n|---|---|\n| Amino (–NH₂) | Proteins (amino acids) |\n| Sulfhydryl (–SH) | Proteins (cysteine) |\n| Carboxyl (–COOH) | Proteins (amino acids) |\n| Hydroxyl (–OH) | Carbohydrates |\n| Phosphate (–PO₄) | Nucleic acids (DNA/RNA) and ATP |"
      },
      {
        "n": 16,
        "type": "short_answer",
        "terms": [],
        "question": "What are the four main groups of macromolecules?",
        "answer": "- Carbohydrates\n- Lipids\n- Proteins\n- Nucleic acids"
      },
      {
        "n": 17,
        "type": "short_answer",
        "terms": [],
        "question": "What is a valence number?",
        "answer": "The number of electrons in the **outermost shell** (valence shell) of an atom."
      },
      {
        "n": 18,
        "type": "short_answer",
        "terms": [
          "monomers"
        ],
        "question": "What is the general name for the structures that make up macromolecules?",
        "answer": "**Monomers** — they join together to form **polymers**."
      },
      {
        "n": 19,
        "type": "short_answer",
        "terms": [],
        "question": "How many electrons are on the 3rd shell?",
        "answer": "Maximum of **18 electrons**."
      },
      {
        "n": 20,
        "type": "short_answer",
        "terms": [
          "ion"
        ],
        "question": "What do we call an atom that gains or loses electrons?",
        "answer": "**Ion**\n\n- Gains electrons → **Anion** (−)\n- Loses electrons → **Cation** (+)"
      },
      {
        "n": 21,
        "type": "short_answer",
        "terms": [],
        "question": "If arsenic replaces phosphorus in DNA, will it greatly alter the genetic information?",
        "answer": "**No** ❌\n\nGenetic information is set by the **sequence of nitrogen bases** (A, T, C, G), not by the phosphorus in the backbone. But arsenic would make the DNA **chemically unstable**, so it wouldn't function normally.\n\n⚠️ Not covered in the class review — kept from your notes; double-check with DrK."
      },
      {
        "n": 22,
        "type": "short_answer",
        "terms": [
          "lipids"
        ],
        "question": "During a Gram stain, alcohol degrades the outer membrane. Which molecule is affected?",
        "answer": "**Lipids.** Alcohol dissolves the lipid-rich outer membrane. (She wanted the **general** answer — lipids — not the specific \"phospholipids.\")"
      },
      {
        "n": 23,
        "type": "short_answer",
        "terms": [],
        "question": "Which fats are saturated?",
        "answer": "**Animal fats** — butter, lard, beef fat.\n\nThe key: saturated fats have only **single covalent bonds between two carbon atoms** (no double bonds) — that's what \"saturated\" means."
      },
      {
        "n": 24,
        "type": "short_answer",
        "terms": [
          "carbon"
        ],
        "question": "Which atom forms the framework of organic molecules?",
        "answer": "**Carbon**"
      },
      {
        "n": 25,
        "type": "short_answer",
        "terms": [],
        "question": "How are covalent bonds formed?",
        "answer": "By **sharing electrons** between atoms."
      }
    ]
  },
  {
    "topic": "A&P — Exam 1 Review · Blood & Endocrine",
    "questions": [
      {
        "n": 1,
        "type": "short_answer",
        "terms": [
          "erythropoietin (EPO)",
          "kidney"
        ],
        "question": "Know the name of the organ that makes erythropoietin (the instructor spelled it 'erythropoietinogen').",
        "answer": "The kidneys. Erythropoietin (EPO) is the hormone that controls erythropoiesis; it is produced primarily in the kidneys (a small amount in the liver). Low blood oxygen stimulates its secretion.\n\n*from chapter 18 slides (18.3b, slide 32)*"
      },
      {
        "n": 2,
        "type": "short_answer",
        "terms": [
          "fibrin",
          "platelets",
          "fibrinogen",
          "trapped RBCs & WBCs"
        ],
        "question": "Know the components of a blood clot — what would you find within the blood clot?",
        "answer": "A blood clot is a meshwork of insoluble fibrin strands (formed from fibrinogen during coagulation) with platelets, and it traps erythrocytes and leukocytes within the fibrin net.\n\n*from chapter 18 slides (18.2a plasma proteins / hemostasis)*"
      },
      {
        "n": 3,
        "type": "multiple_choice",
        "terms": [
          "oxygen -> heme iron",
          "carbon dioxide -> globin"
        ],
        "question": "Know which molecules can be chemically attached to hemoglobin.",
        "answer": "Oxygen — binds to the iron ion in each heme group (up to 4 O2 per hemoglobin). Carbon dioxide — binds to the globin protein chains (not the iron). (Carbon monoxide and nitric oxide can also bind hemoglobin.)\n\n*from chapter 18 slides (18.3b, slides 29-30)*"
      },
      {
        "n": 4,
        "type": "short_answer",
        "terms": [
          "colloid osmotic pressure",
          "albumin",
          "osmosis"
        ],
        "question": "ESSAY: Explain how an increased plasma-protein concentration can change the amount of fluid in the blood.",
        "answer": "Plasma proteins (especially albumin) generate the blood's colloid osmotic (oncotic) pressure. If plasma-protein concentration increases, the blood becomes more hypertonic, so it pulls and holds more water in the bloodstream by osmosis across the capillary walls — increasing the fluid (water) volume of the blood. (Conversely, low plasma protein lets fluid leave the blood -> edema.)\n\n*from chapter 18 slides (18.1b physical characteristics; 18.2 composition)*"
      },
      {
        "n": 5,
        "type": "short_answer",
        "terms": [
          "erythrocytes",
          "leukocytes",
          "platelets"
        ],
        "question": "You are given statements to divide into red blood cells, white blood cells, and platelets — pay attention to structure AND function.",
        "answer": "RBCs (erythrocytes): biconcave, anucleate discs packed with hemoglobin; no nucleus/organelles; transport O2 and CO2. WBCs (leukocytes): have a nucleus and organelles (no hemoglobin); larger; defend against pathogens; motile (diapedesis, chemotaxis). Platelets: small membrane-bound cell fragments (no nucleus) broken off megakaryocytes; function in clotting/hemostasis.\n\n*from chapter 18 slides (18.1, 18.3b-d)*"
      },
      {
        "n": 6,
        "type": "multiple_choice",
        "terms": [
          "hematocrit",
          "dehydration",
          "EPO",
          "testosterone",
          "altitude"
        ],
        "question": "Out of the choices given, select everything that can affect hematocrit.",
        "answer": "Anything that changes the number of erythrocytes OR the plasma volume: number of RBCs / erythropoiesis (EPO from kidney), dehydration (down plasma -> up hematocrit), hemorrhage/blood loss (down), testosterone (up, so males run higher), high altitude / low blood oxygen (up EPO -> up), anemia (down), and overhydration (down).\n\n*from chapter 18 slides (18.1c slide 10; 18.3b slide 32; Clinical View: Anemia)*"
      },
      {
        "n": 7,
        "type": "fill_in",
        "terms": [
          "ABO antigens",
          "Rh factor",
          "+/-"
        ],
        "question": "You are given statements (e.g. 'has B antigen', 'has no antigens') and must write down the blood type(s) — don't forget plus and minus (Rh).",
        "answer": "Name blood types by the surface antigen(s) present: A antigen -> type A; B antigen -> type B; both A and B -> type AB; no antigens -> type O. Then add Rh: Rh (D) antigen present -> positive (+); absent -> negative (-). So 'has B antigen' -> B- and B+ (and it's also on AB- / AB+). Always list BOTH the + and - versions unless the statement specifies Rh.\n\n*from chapter 18 slides (18.3b blood types 18.9)*"
      },
      {
        "n": 8,
        "type": "multiple_choice",
        "terms": [
          "transportation",
          "protection",
          "regulation"
        ],
        "question": "Select the functions of blood.",
        "answer": "Three functions: (1) Transportation — formed elements, O2/CO2, nutrients, hormones, heat, wastes. (2) Protection — leukocytes & plasma proteins fight pathogens; platelets & clotting proteins prevent blood loss. (3) Regulation — of body temperature, pH (buffers), and fluid balance.\n\n*from chapter 18 slides (18.1a, slides 4-5)*"
      },
      {
        "n": 9,
        "type": "fill_in",
        "terms": [
          "hematocrit",
          "platelet count",
          "normal values"
        ],
        "question": "Know the normal values for: red blood cell count, hemoglobin concentration, hematocrit, white blood cell count, and platelet count.",
        "answer": "From the chapter slides — Hematocrit: males 42-56%, females 38-46%. Platelet count: 150,000-400,000 per cubic millimeter (mm3).\n\n*from chapter 18 slides (18.1c slide 10; 18.3d slide 59)*\n\n**Proposed — check:** Typical reference values NOT stated on these slides (confirm in the study session / lab packet): RBC count ~ 4.2-6.2 million/uL (M higher than F); Hemoglobin ~ 13.5-17.5 g/dL (M), 12-16 g/dL (F); WBC count ~ 4,500-11,000/uL."
      },
      {
        "n": 10,
        "type": "multiple_choice",
        "terms": [
          "globin",
          "heme/iron binds O2"
        ],
        "question": "Which part of the hemoglobin molecule binds to carbon dioxide?",
        "answer": "The globin (the protein chains). Carbon dioxide binds to the globin protein — NOT to the iron. (Oxygen is what binds the iron ion in the heme group.)\n\n*from chapter 18 slides (18.3b slide 30)*"
      },
      {
        "n": 11,
        "type": "multiple_choice",
        "terms": [
          "ligands / chemical messengers",
          "hypothalamus",
          "adrenal medulla"
        ],
        "question": "Select the statements that describe communication between the nervous and endocrine systems.",
        "answer": "Both the nervous and endocrine systems are control systems that release ligands (chemical messengers) which bind receptors on target cells. Differences: unlike the nervous system, the endocrine system sends its hormones through the BLOOD, can target any cell with the right receptor (widespread), has longer reaction times, and longer-lasting effects (minutes to weeks). The two systems are linked — the hypothalamus (nervous tissue) controls the pituitary, and the adrenal medulla is neuroendocrine.\n\n*from chapter 17 slides (17.1b, slides 3-4; Figure 17.1)*"
      },
      {
        "n": 12,
        "type": "image",
        "terms": [
          "adrenal gland",
          "cortex zones",
          "medulla"
        ],
        "question": "IMAGE question — identify structures on Chapter 17, slide 74 (the same as today's quiz). Answer with numbers, as expected.",
        "answer": "Ch 17 slide 74 is the ADRENAL GLAND (Figure 17.18b — sectional anatomy & histology). From OUTER to INNER, identify: (1) capsule; (2) adrenal cortex — zona glomerulosa (makes mineralocorticoids / aldosterone), zona fasciculata (makes glucocorticoids / cortisol), zona reticularis (makes gonadocorticoids / androgens); (3) adrenal medulla (makes epinephrine & norepinephrine). Match the numbers to these layers.\n\n*from chapter 17 slides (slide 74 Figure 17.18b; 17.9a slide 75)*"
      },
      {
        "n": 13,
        "type": "short_answer",
        "terms": [
          "anterior pituitary",
          "posterior pituitary",
          "hypothalamus"
        ],
        "question": "You are given statements to divide by whether the hormone is produced by the anterior pituitary, the hypothalamus, or the posterior pituitary.",
        "answer": "ANTERIOR pituitary MAKES its own hormones: TSH (thyrotropin), ACTH (corticotropin), FSH & LH (gonadotropins), PRL (prolactin), GH (growth hormone), and MSH. HYPOTHALAMUS makes the releasing/inhibiting hormones (TRH, PRH, GnRH, CRH, GHRH; and PIH & GIH) AND makes ADH & oxytocin. POSTERIOR pituitary makes nothing itself — it only STORES and RELEASES ADH & oxytocin, which are made in the hypothalamus.\n\n*from chapter 17 slides (17.7b slide 45; 17.7c slides 47-48)*"
      },
      {
        "n": 14,
        "type": "multiple_choice",
        "terms": [
          "glandular vs neural",
          "portal system",
          "infundibulum"
        ],
        "question": "Out of the choices given, select everything that describes how the anterior pituitary differs from the posterior pituitary.",
        "answer": "ANTERIOR pituitary: glandular tissue; synthesizes its OWN hormones; stimulated by hypothalamic regulatory (releasing/inhibiting) hormones delivered through the hypothalamo-hypophyseal PORTAL system of blood vessels. POSTERIOR pituitary (neurohypophysis): NEURAL tissue; does NOT make hormones — hypothalamic neurons project through the infundibulum and release stored ADH & oxytocin there.\n\n*from chapter 17 slides (17.7a slides 40-43; 17.7b slide 45)*"
      },
      {
        "n": 15,
        "type": "short_answer",
        "terms": [
          "first messenger",
          "G protein",
          "adenylate cyclase",
          "cAMP",
          "protein kinase A"
        ],
        "question": "Put the steps of a water-soluble hormone's action in the correct order, starting with the hormone binding to the receptor on the cell membrane.",
        "answer": "1) The water-soluble hormone (e.g. glucagon) binds its receptor on the cell membrane -> 2) the G protein is activated -> 3) the activated G protein activates adenylate cyclase -> 4) adenylate cyclase generates cAMP (the second messenger) -> 5) cAMP activates a protein kinase (protein kinase A) -> 6) protein kinase A phosphorylates other molecules, activating or inhibiting them, producing the cell's response.\n\n*from chapter 17 slides (17.5b Water-Soluble Hormones, slide 26)*"
      },
      {
        "n": 16,
        "type": "short_answer",
        "terms": [
          "insulin - lowers glucose",
          "glucagon - raises glucose"
        ],
        "question": "Divide the effects (drag-and-drop) of insulin vs. glucagon.",
        "answer": "INSULIN (beta cells) LOWERS blood glucose: after a meal, beta cells detect rising glucose and secrete insulin, which drives glucose uptake into cells, glycogenesis, and fat/protein storage. GLUCAGON (alpha cells) RAISES blood glucose: glycogenolysis (glycogen -> glucose) and gluconeogenesis. They are antagonists that keep blood glucose in the normal 70-110 mg/dL range.\n\n*from chapter 17 slides (17.10b Pancreatic Hormones, slides 87-88; 17.6b slide 37)*"
      },
      {
        "n": 17,
        "type": "short_answer",
        "terms": [
          "PTH - raises Ca",
          "calcitonin - lowers Ca"
        ],
        "question": "Divide the effects (drag-and-drop) of PTH vs. calcitonin.",
        "answer": "PTH (parathyroid hormone, from the chief cells) RAISES blood calcium: liberates calcium from bone, decreases its loss in urine (more kidney reabsorption), and activates calcitriol (which increases gut absorption of calcium). CALCITONIN (parafollicular / C cells of the thyroid) LOWERS blood calcium: inhibits osteoclast activity and makes the kidneys excrete more calcium in urine.\n\n*from chapter 17 slides (17.8c Calcitonin slide 70; 17.11b Parathyroid slide 97)*"
      },
      {
        "n": 18,
        "type": "fill_in",
        "terms": [
          "cortisol",
          "growth hormone",
          "epinephrine"
        ],
        "question": "Name two hormones NOT made by the pancreas that can increase the concentration of glucose in the blood.",
        "answer": "Any two of: cortisol (a glucocorticoid from the adrenal cortex — increases blood sugar), growth hormone (stimulates glycogenolysis and gluconeogenesis), and epinephrine (from the adrenal medulla). (Glucagon also raises glucose but IS made by the pancreas, so it doesn't count.)\n\n*from chapter 17 slides (17.9a slide 75 cortisol; 17.7d slide 53 growth hormone)*"
      },
      {
        "n": 19,
        "type": "fill_in",
        "terms": [
          "synergistic",
          "permissive",
          "antagonistic"
        ],
        "question": "Name three ways one hormone can affect the action of another hormone.",
        "answer": "(1) SYNERGISTIC — one hormone reinforces the activity of another (e.g. estrogen and progesterone on a target cell). (2) PERMISSIVE — one hormone requires the activity of another to have its effect (e.g. oxytocin's milk ejection requires prolactin's milk production). (3) ANTAGONISTIC — one hormone opposes another (e.g. glucagon raises blood glucose while insulin lowers it).\n\n*from chapter 17 slides (17.6b Hormone Interactions, slide 37)*"
      },
      {
        "n": 20,
        "type": "fill_in",
        "terms": [
          "albumin - osmotic pressure",
          "fibrinogen - clotting",
          "globulins - immunity/transport"
        ],
        "question": "Name three functions of plasma proteins.",
        "answer": "Any three: (1) maintain colloid osmotic pressure / fluid balance (albumin); (2) blood clotting (fibrinogen and other clotting proteins); (3) immune defense (gamma globulins / antibodies); (4) transport — bind and carry hormones, lipids, and ions. Most plasma proteins are made in the liver.\n\n*from chapter 18 slides (18.2a, slides 14-17)*"
      },
      {
        "n": 21,
        "type": "short_answer",
        "terms": [
          "no nucleus",
          "no mitochondria",
          "biconcave",
          "hemoglobin"
        ],
        "question": "Name two organelles missing from a mature red blood cell, and explain how that helps the RBC do its job.",
        "answer": "Mature RBCs lack a NUCLEUS and MITOCHONDRIA (they also lack ribosomes/ER). Benefits: (1) losing the nucleus & organelles leaves more room for hemoglobin and gives the biconcave, flexible shape — so each cell carries more oxygen and can squeeze through narrow capillaries; (2) lacking mitochondria, the RBC makes ATP anaerobically and does NOT consume the very oxygen it is transporting.\n\n*from chapter 18 slides (18.3b slides 27 & 35)*"
      },
      {
        "n": 22,
        "type": "short_answer",
        "terms": [
          "Rh- mother",
          "Rh+ baby",
          "anti-D antibodies",
          "RhoGAM"
        ],
        "question": "Describe the mechanism of hemolytic disease of the newborn — the Rh status of the mother and baby, why it happens, and why we must prevent it.",
        "answer": "Mother is Rh-NEGATIVE, baby is Rh-POSITIVE. During the delivery of a first Rh+ baby, the mother is exposed to Rh+ blood and makes anti-D antibodies. In a LATER pregnancy with another Rh+ baby, those anti-D (IgG) antibodies cross the placenta and destroy the fetal red blood cells -> hemolytic disease of the newborn (HDN): fetal anemia, hyperbilirubinemia, and heart failure. Prevention: give the Rh-negative mother special anti-D immunoglobulin (RhoGAM) so she never builds up the antibodies.\n\n*from chapter 18 slides (Clinical View: Rh Incompatibility, slide 45)*"
      },
      {
        "n": 23,
        "type": "fill_in",
        "terms": [
          "heparin",
          "prostacyclin",
          "antithrombin",
          "smooth endothelium"
        ],
        "question": "Name two factors that will INHIBIT clotting.",
        "answer": "Any two: heparin (released by basophils/mast cells — inhibits clotting); prostacyclin (from healthy endothelial cells — keeps platelets from plugging normal vessels); antithrombin (in plasma); the smooth, intact endothelial lining; and plasmin (breaks down fibrin during fibrinolysis).\n\n*from chapter 18 slides (18.3c basophils slide 51; 18.4b slide 65; 18.4d fibrinolysis)*"
      },
      {
        "n": 24,
        "type": "fill_in",
        "terms": [
          "increases blood sugar",
          "gluconeogenesis",
          "protein/fat breakdown",
          "anti-inflammatory"
        ],
        "question": "Name three effects of cortisol.",
        "answer": "Cortisol is the main glucocorticoid (from the zona fasciculata of the adrenal cortex). Any three effects: (1) increases blood sugar (glucose); (2) stimulates gluconeogenesis; (3) breaks down protein and fat (mobilizes them for fuel); (4) has an anti-inflammatory / immune-suppressing effect. It is a key stress hormone.\n\n*from chapter 17 slides (17.9a slide 75 — Cortisol increases blood sugar; glucocorticoid)*"
      },
      {
        "n": 25,
        "type": "short_answer",
        "terms": [
          "beta cells",
          "alpha cells",
          "delta cells",
          "islets of Langerhans"
        ],
        "question": "Know the cells that produce insulin, glucagon, and somatostatin.",
        "answer": "The pancreatic islets (islets of Langerhans): ALPHA (alpha) cells secrete glucagon; BETA (beta) cells secrete insulin; DELTA (delta) cells secrete somatostatin. (F cells secrete pancreatic polypeptide.)\n\n*from chapter 17 slides (17.10a Anatomy of the Pancreas, slide 85)*"
      },
      {
        "n": 26,
        "type": "short_answer",
        "terms": [
          "steroid = lipid-soluble",
          "water-soluble = fast",
          "receptor location"
        ],
        "question": "Match the statements to steroid hormone, water-soluble hormone, or both (use the table).",
        "answer": "WATER-SOLUBLE hormones (peptides, most amines; fast-acting): cannot cross the membrane, so their receptor is ON the cell surface and they act through second messengers (cAMP). Short half-life, travel free in blood. STEROID hormones (lipid-soluble, made from cholesterol; slow, longer-lasting): cross the membrane and bind an INTRACELLULAR receptor, directly altering gene transcription. Long half-life; need carrier proteins in blood. BOTH: bind a receptor and ultimately change the target cell's activity.\n\n*from chapter 17 slides (17.3a steroids slide 12; 17.5b water-soluble slide 26; 17.4 half-life/transport slides 18-20)*"
      },
      {
        "n": 27,
        "type": "multiple_choice",
        "terms": [
          "growth/development/metabolism",
          "homeostasis",
          "digestion",
          "reproduction"
        ],
        "question": "Know the functions of the endocrine system.",
        "answer": "General functions of the endocrine system (via hormones): (1) regulating development, growth, and metabolism; (2) maintaining homeostasis of blood composition and volume (glucose, ions, blood volume, platelet number); (3) controlling digestive processes; and (4) controlling reproductive activities.\n\n*from chapter 17 slides (17.1c General Functions, slide 5)*"
      },
      {
        "n": 28,
        "type": "multiple_choice",
        "terms": [
          "EPO",
          "oxygen level",
          "iron / B12 / folate",
          "testosterone",
          "altitude"
        ],
        "question": "Out of the choices given, select everything that affects erythropoiesis.",
        "answer": "Things that affect red-blood-cell production: erythropoietin (EPO) from the kidney; blood oxygen level (low O2 stimulates it); raw materials — iron, B vitamins (B12, folate), and amino acids; testosterone (up); high altitude (up via EPO); healthy red bone marrow; and intrinsic factor (needed to absorb B12).\n\n*from chapter 18 slides (18.3a slide 21; 18.3b slide 32; Clinical View: Anemia)*"
      },
      {
        "n": 29,
        "type": "short_answer",
        "terms": [
          "spleen",
          "globin -> amino acids",
          "heme -> iron + bilirubin",
          "transferrin/ferritin"
        ],
        "question": "Place the events of red blood cell recycling in the correct order.",
        "answer": "Order: (1) The aging RBC (~120 days) becomes less flexible and is trapped and phagocytized in the SPLEEN (or liver). (2) Hemoglobin is split into globin and heme. (3) Globin is broken into amino acids (reused for protein synthesis). (4) Heme is split into iron and biliverdin/bilirubin. (5) Iron is carried by transferrin to the liver, stored as ferritin/hemosiderin, and sent to red bone marrow as needed to make new RBCs. (6) Bilirubin goes to the liver and out in bile.\n\n*from chapter 18 slides (18.3b Erythrocyte destruction, slide 35)*"
      },
      {
        "n": 30,
        "type": "short_answer",
        "terms": [
          "neutrophils",
          "eosinophils",
          "lymphocytes",
          "monocytes"
        ],
        "question": "Match the statements to lymphocytes, neutrophils, eosinophils, and monocytes.",
        "answer": "NEUTROPHILS: most numerous leukocyte; multilobed nucleus; phagocytize bacteria (rise in bacterial infection). EOSINOPHILS: red-staining granules; fight parasites and moderate allergic/inflammatory reactions. LYMPHOCYTES: dark round nucleus; immunity — T cells (manage response), B cells (-> plasma cells, make antibodies), NK cells (kill abnormal/infected cells). MONOCYTES: largest leukocyte; leave blood to become macrophages (phagocytosis).\n\n*from chapter 18 slides (18.3c Leukocytes, slides 49-53)*"
      },
      {
        "n": 31,
        "type": "fill_in",
        "terms": [
          "megakaryocyte",
          "thrombopoietin"
        ],
        "question": "Know the name of the cell that makes platelets (be able to spell it).",
        "answer": "The MEGAKARYOCYTE (m-e-g-a-k-a-r-y-o-c-y-t-e). It forms from a myeloid stem cell under thrombopoietin and sheds thousands of platelets from its proplatelet extensions in the red marrow.\n\n*from chapter 18 slides (18.3a Thrombopoiesis slide 24; 18.3d slide 59)*"
      },
      {
        "n": 32,
        "type": "short_answer",
        "terms": [
          "vascular spasm",
          "platelet plug",
          "coagulation",
          "fibrinolysis"
        ],
        "question": "Divide the statements into the steps of hemostasis: vascular spasm, platelet plug formation, coagulation, and fibrinolysis.",
        "answer": "(1) VASCULAR SPASM — the injured vessel constricts to reduce blood flow. (2) PLATELET PLUG FORMATION — platelets adhere, activate, degranulate, and aggregate into a plug. (3) COAGULATION — the clotting cascade converts fibrinogen to fibrin, forming a fibrin mesh that solidifies the clot. (4) FIBRINOLYSIS — after repair, plasmin degrades the fibrin strands to dissolve the clot.\n\n*from chapter 18 slides (Hemostasis slide 62; 18.4b slide 65; 18.4d slide 73)*"
      },
      {
        "n": 33,
        "type": "fill_in",
        "terms": [
          "chemotaxis"
        ],
        "question": "Know the definition of chemotaxis (be able to spell it).",
        "answer": "Chemotaxis (c-h-e-m-o-t-a-x-i-s) = the attraction/movement of leukocytes toward chemicals released at an infection or injury site — it guides white blood cells to where they're needed.\n\n*from chapter 18 slides (18.3c Leukocyte characteristics, slide 46)*"
      },
      {
        "n": 34,
        "type": "multiple_choice",
        "terms": [
          "Na+ retention",
          "K+ secretion",
          "up blood volume/BP"
        ],
        "question": "Select the effects of aldosterone.",
        "answer": "Aldosterone is the mineralocorticoid made in the zona glomerulosa of the adrenal cortex. It fosters sodium (Na+) RETENTION and potassium (K+) SECRETION by the kidneys. Because water follows the retained sodium, it also raises blood volume and blood pressure.\n\n*from chapter 17 slides (17.9a Adrenal Glands, slide 75)*"
      },
      {
        "n": 35,
        "type": "fill_in",
        "terms": [
          "hemocytoblast",
          "pluripotent"
        ],
        "question": "Know the name of the stem cell that makes ALL the formed elements of blood (be able to spell it).",
        "answer": "The HEMOCYTOBLAST (h-e-m-o-c-y-t-o-b-l-a-s-t) — the pluripotent hematopoietic stem cell in red bone marrow. It gives rise to both the myeloid and lymphoid lines, so it forms all formed elements (RBCs, all leukocytes, and platelets).\n\n*from chapter 18 slides (18.3a Hematopoiesis, slide 20)*"
      },
      {
        "n": 36,
        "type": "fill_in",
        "terms": [
          "diapedesis",
          "emigration"
        ],
        "question": "Know the term that describes white blood cells moving out of the blood vessel.",
        "answer": "Diapedesis (also called emigration) — the process of leukocytes squeezing through the blood vessel wall to reach the tissues.\n\n*from chapter 18 slides (18.3c Leukocyte characteristics, slide 46)*"
      },
      {
        "n": 37,
        "type": "fill_in",
        "terms": [
          "inactive -> active",
          "cascade",
          "calcium",
          "prothrombin activator",
          "common pathway"
        ],
        "question": "FILL-IN: Clotting factors are present in inactive form. ___ (complete the statement about the cascade, lag time, calcium, and prothrombin).",
        "answer": "Clotting factors are present in inactive form. Once activated, the active factors work in a CASCADE, which allows them to act immediately, decreasing the lag time. Many steps of this pathway require CALCIUM and prothrombin. The PROTHROMBIN ACTIVATOR is the factor that triggers the common pathway.\n\n*from the lecture (instructor's fill-in statement) + chapter 18 slides (18.4 coagulation)*"
      }
    ]
  }
];
window.SAMPLE_LECTURE = window.SAMPLE_LECTURES[0];  /* back-compat: first note */
