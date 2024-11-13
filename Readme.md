### Mercadolibre Exam - GenAI & FFB Team
<p>
Magneto wants to recrut as many mutants as possible to fight against the X-Men.
He has hired you to develop a project to detect if a human is a mutant based on their DNA sequence.
For that, he has asked you to create a program with a method or function with the following signature. (in Python)
</p>

```py
boolean isMutant(String[] dna);

isMutant(dna []string) bool
is_mutant(dna)
is_mutant(dna: &[&str]) -> bool
```
<p>
In which you will receive as a parameter an array of Strings that represent each row of an (NxN) table with the DNA sequence. The letters in the Strings can only be: (A, T, C, G), which represent each nitrogenous base of DNA.
</p>

[
  ['A''T''G''C''G''A']
  ['C''A''G''T''G''C']
  ['T''T''A''T''T''T']
  ['A''G''A''G''G''G']
  ['G''C''G''T''C''A']
  ['T''C''A''C''T''G']
]
<P>no-mutant</P>

[
  ['A''T''G''C''G''A']
  ['C''A''G''T''G''C']
  ['T''T''A''T''G''T']
  ['A''G''A''A''G''G']
  ['C''C''C''C''T''A']
  ['T''C''A''C''T''G']
]
<p>mutant</p>

<p>
You will know if a human is a mutant if you find more than one sequence of our identical letters, either diagonally, horizontally, or vertically.
</p>

<p>
Example (Mutant case):
</p>
```py
String[] dna = {"ATGCGA", "CAGTGC", "TTATGT", "AGAAGG", "CCCCTA", "TCACTG"};
```
<P>
In this case, calling the function `isMutant(dna)` returns `true`
</P>

> Develop the algorithm as efficiently as possible

<strong>
challenges:
</strong>

<strong>
Level 1:
</strong>
<p>
Create a program (in python) that meets the requirements given by Magneto.
</p>

<strong>
Level 2:
</strong>

<p>
Create a REST API, host this API on a free cloud computing service (Google App Engine, Amazon AWS, etc.), and create the "/mutant/" endpoint where it is possible to detect if a human is a mutant by sending the DNA sequence through an HTTP POST with a JSON in the following format:
</p>

```json
POST - /mutant/
{
  "dna": ["ATGCGA", "CAGTGC", "TTATGT", "AGAAGG", "CCCCTA", "TCACTG"]
}
```
<p>
if a mutant is detected, it should return an HTTP 200-OK; otherwise, it should return 402-Forbiden.
</p>

<strong>
Level 3:
</strong>
<p>
Add a database that stores the DNA sequences verified with the API
</p>
- Only one record per DNA secuence.
- Expose an additional endpoint "/stats" that returns a JSON  with the DNA verification atatistics:

```json
{
  "count_mutant_dna": 40,
  "count_human_dna": 100,
  "ratio": 0.4
}
```

