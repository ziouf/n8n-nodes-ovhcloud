# OVH Cloud Public Cloud — kubeUpdateLoadBalancersSubnetIdUpdatePut

> Opération `kubeUpdateLoadBalancersSubnetIdUpdatePut` · Fichier source : `nodes/OvhCloudPublicCloud/kube/kubeUpdateLoadBalancersSubnetIdUpdatePut.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| PUT | `/cloud/project/{serviceName}{kubeId}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `publicCloudProjectId` | resourceLocator | Oui |
| `list` | list | — |
| `name` | string | — |
| `kubeId` | string | Oui |
| `loadBalancersSubnetId` | string | Oui |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
