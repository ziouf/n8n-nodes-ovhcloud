# OVH Cloud Connectivity — Test Eligibility by Line (Partners)

> Opération `testLinePartnersPost` · Fichier source : `nodes/OvhCloudConnectivity/resources/eligibilityTest/testLinePartnersPost.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/connectivity/eligibility/test/line/partners` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `lineNumber` | string | Oui |
| `status` | options | Oui |
| `Active` | — | — |
| `Inactive` | — | — |
| `streetCode` | string | — |
| `streetNumber` | string | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
