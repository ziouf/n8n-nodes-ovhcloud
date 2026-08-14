# OVH Cloud Nutanix — Fetch Requirements

> Opération `requirementsGet` · Fichier source : `nodes/OvhCloudNutanix/resources/requirementsGet.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| GET | `/nutanix/requirements` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `erasureCoding` | boolean | Oui |
| `rackAwareness` | boolean | Oui |
| `redundancyFactor` | number | Oui |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
