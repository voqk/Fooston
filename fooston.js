function rankingToTableRow(ranking) {
	const delta = parseInt(ranking['Change']);
	const deltaClass = delta >= 0 ? 'label label-success' : 'label label-danger';

	return `
		<tr>
			<td>${ranking.Rank}</td>
			<td>${ranking.Standings}</td>
			<td>${ranking.Rating} <span class="${deltaClass}">${delta}</span></td>
			<td>${ranking['Games Back']}</td>
			<td>${ranking['Prev Rank']}</td>
			<td>${ranking['Prev Pnts']}</td>
			<td>${ranking['Wks Off']}</td>
		</tr>`;
}

$(document).ready(function() {
	const rankingRows = currentRankings.map((ranking) => rankingToTableRow(ranking)).join("");
	$('#ratings > tbody:last-child').append(rankingRows);
});

